import { Pool } from 'pg';
import uniqid from 'uniqid';
import { fieldResolve } from './fieldResolve.js';
import { isValueASQL } from './isValueASQL.js';
import { toString } from './toString.js';
class Select {
    constructor() {
        this._fields = [];
    }
    select(field, alias) {
        // Resolve field name
        let f = '';
        if (isValueASQL(field) || field === '*') {
            if (typeof field === 'object' && field.isSQL === true) {
                f = field.value;
            }
            else {
                f = field;
            }
        }
        else {
            f += `"${field}"`;
        }
        if (alias) {
            f += ` AS "${alias}"`;
        }
        this._fields.push(f);
        return this;
    }
    render() {
        let stm = 'SELECT ';
        if (this._fields.length === 0) {
            stm = stm + '*  ';
        }
        else {
            this._fields.forEach((element) => {
                stm += `${element}, `;
            });
        }
        return stm.slice(0, -2);
    }
    clone() {
        const cp = new Select();
        cp._fields = [...this._fields];
        return cp;
    }
}
class RawLeaf {
    constructor(link, rawSql, binding = {}) {
        this._link = link;
        this._binding = binding;
        this._rawSql = rawSql;
    }
    getBinding() {
        return this._binding;
    }
    parent() {
        return this._parent;
    }
    render() {
        return `${this._link} ${this._rawSql}`;
    }
    clone(node) {
        const cp = new RawLeaf(this._link, this._rawSql, this._binding);
        cp._parent = node;
        return cp;
    }
}
class Leaf {
    constructor(link, field, operator, value, node) {
        this._binding = {};
        this._value = '';
        if (value.isSQL === true) {
            this._value = value.value;
        }
        else {
            value = value.value;
            if (operator.toUpperCase() === 'IN' ||
                operator.toUpperCase() === 'NOT IN') {
                if (Array.isArray(value) && value.length > 0) {
                    this._value = '(';
                    value.forEach((element) => {
                        const key = uniqid();
                        this._value = this._value + `:${key}, `;
                        this._binding[key] = element;
                    });
                    this._value = this._value.slice(0, -2) + ')';
                }
                else if (Array.isArray(value) && value.length === 0) {
                    if (operator.toUpperCase() === 'IN') {
                        this._value = '(SELECT 1 WHERE 1=0)';
                    }
                    else {
                        this._value = '(SELECT 1 WHERE 1=1)';
                    }
                }
                else {
                    throw new Error(`Expect an array, got ${typeof value}`);
                }
            }
            else if (operator.toUpperCase() === 'IS NULL' ||
                operator.toUpperCase() === 'IS NOT NULL') {
                this._value = '';
            }
            else {
                const key = uniqid();
                this._binding[key] = toString(value);
                this._value = `:${key}`;
            }
        }
        this._link = link;
        this._field = fieldResolve(field);
        this._operator = operator.toUpperCase();
        this._parent = node;
    }
    getBinding() {
        return this._binding;
    }
    parent() {
        return this._parent;
    }
    render() {
        return `${this._link} ${this._field} ${this._operator} ${this._value}`;
    }
    clone(node) {
        const cp = new Leaf('AND', 'dummy', '=', { value: 'dummy', isSQL: false });
        cp._binding = { ...this._binding };
        cp._field = this._field;
        cp._link = this._link;
        cp._operator = this._operator;
        cp._value = this._value;
        cp._parent = node;
        return cp;
    }
}
class Node {
    constructor(query, defaultValueTreatment = 'value') {
        this._tree = [];
        this._defaultValueTreatment = defaultValueTreatment;
        this._query = query;
    }
    addLeaf(link, field, operator, value) {
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            this._tree.push(new Leaf(link, field, operator, value, this));
        }
        else {
            this._tree.push(new Leaf(link, field, operator, { value: value, isSQL: this._defaultValueTreatment === 'sql' }, this));
        }
        return this;
    }
    addRaw(link, sql, binding = {}) {
        this._tree.push(new RawLeaf(link, sql, binding));
        return this;
    }
    addNode(node) {
        node._parent = this;
        this._tree.push(node);
        return node;
    }
    empty() {
        this._tree = [];
        return this;
    }
    getLeafs() {
        return this._tree.filter((e) => e instanceof Leaf || e instanceof RawLeaf);
    }
    getNodes() {
        return this._tree.filter((e) => e instanceof Node);
    }
    isEmpty() {
        return !(this.getLeafs().length > 0 || this.getNodes().length > 0);
    }
    findLeaf(link, field, operator, value) {
        for (const element of this._tree) {
            if (element instanceof Leaf &&
                element._link === link &&
                element._field === fieldResolve(field) &&
                element._binding[field] === value) {
                return element;
            }
            else if (element instanceof Node) {
                const result = element.findLeaf(link, field, operator, value);
                if (result)
                    return result;
            }
        }
        return undefined;
    }
    getBinding() {
        const binding = {};
        this._tree.forEach((element) => {
            if (element instanceof Leaf ||
                element instanceof RawLeaf ||
                element instanceof Node) {
                Object.assign(binding, element.getBinding());
            }
        });
        return binding;
    }
    and(field, operator, value) {
        this.addLeaf('AND', field, operator, value);
        return this;
    }
    or(field, operator, value) {
        this.addLeaf('OR', field, operator, value);
        return this;
    }
    render() {
        if (this._tree.length === 0) {
            return '';
        }
        let statement = `${this._link} (`;
        this._tree.forEach((element, index) => {
            if (index === 0) {
                statement += ` ${element.render()}`.slice(this._link === 'AND' ? 5 : 4);
            }
            else {
                statement += ` ${element.render()}`;
            }
        });
        statement += ')';
        return statement;
    }
    async execute(connection, releaseConnection = true) {
        return await this._query.execute(connection, releaseConnection);
    }
    async load(connection, releaseConnection = true) {
        if (this._query instanceof SelectQuery) {
            return await this._query.load(connection, releaseConnection);
        }
        else {
            throw new Error('`load` method is only available on `SelectQuery`');
        }
    }
    clone(query, parent) {
        const cp = new Node(query);
        cp._link = this._link;
        cp._parent = parent;
        cp._tree = this._tree.map((t) => {
            if (t instanceof Leaf || t instanceof RawLeaf) {
                return t.clone(cp);
            }
            else if (t instanceof Node) {
                return t.clone(query, cp);
            }
            return t;
        });
        return cp;
    }
}
class Join {
    constructor(query) {
        this._joins = [];
        this._query = query;
    }
    add(type, table, alias) {
        this._joins.push({
            type,
            table,
            alias: alias || table,
            on: new Node(this._query, 'sql')
        });
        return this;
    }
    on(column, operator, referencedColumn) {
        if (this._joins.length === 0) {
            throw new Error('Invalid call');
        }
        const node = this._joins[this._joins.length - 1]['on'];
        node._link = 'ON';
        node.addLeaf('AND', column, operator, referencedColumn);
        return node;
    }
    render() {
        if (this._joins.length === 0) {
            return '';
        }
        let stm = '';
        this._joins.forEach((join) => {
            stm += `${join.type} "${join.table}" AS "${join.alias}" ${join.on.render()} `;
            Object.assign(this._query._binding, join.on.getBinding());
        });
        return stm;
    }
    clone(query) {
        const cp = new Join(query);
        cp._joins = [...this._joins];
        return cp;
    }
}
class Where extends Node {
    constructor(query) {
        super(query);
    }
    render() {
        Object.assign(this._query._binding, this.getBinding());
        const render = super.render();
        if (render === '') {
            return '';
        }
        else {
            return 'WHERE ' + render.slice(4);
        }
    }
    andWhere(field, operator, value) {
        const node = new Node(this._query);
        node._link = 'AND';
        node._parent = this;
        node.addLeaf('AND', field, operator, value);
        this.addNode(node);
        return node;
    }
    orWhere(field, operator, value) {
        const node = new Node(this._query);
        node._link = 'OR';
        node._parent = this;
        node.addLeaf('OR', field, operator, value);
        this.addNode(node);
        return node;
    }
    clone(query) {
        const cp = new Where(query);
        cp._link = this._link;
        cp._tree = this._tree.map((t) => {
            if (t instanceof Leaf) {
                return t.clone(cp);
            }
            else if (t instanceof Node) {
                return t.clone(query, cp);
            }
            return t;
        });
        return cp;
    }
}
class Having extends Node {
    constructor(query) {
        super();
        this._query = query;
        this._link = 'HAVING';
    }
    render() {
        Object.assign(this._query._binding, this.getBinding());
        return super.render();
    }
    clone(query) {
        const cp = new Having(query);
        cp._tree = this._tree.map((t) => {
            if (t instanceof Leaf) {
                return t.clone(cp);
            }
            else if (t instanceof Node) {
                return t.clone(query, cp);
            }
            return t;
        });
        return cp;
    }
}
class Limit {
    constructor(offset = null, limit = null) {
        this._offset = offset;
        this._limit = limit;
    }
    render() {
        if (this._offset === null && this._limit === null) {
            return '';
        }
        return `LIMIT ${this._limit === null ? null : this._limit} OFFSET ${+this._offset || 0} `;
    }
    clone() {
        return new Limit(this._offset, this._limit);
    }
}
class GroupBy {
    constructor() {
        this._fields = [];
    }
    add(field) {
        this._fields.push(fieldResolve(field));
        return this;
    }
    render() {
        if (this._fields.length === 0) {
            return '';
        }
        return `GROUP BY ${this._fields.join(',')}`;
    }
    clone() {
        const cp = new GroupBy();
        cp._fields = [...this._fields];
        return cp;
    }
}
class OrderBy {
    constructor() {
        this._field = null;
        this._direction = 'DESC';
    }
    add(field, direction) {
        this._field = fieldResolve(field);
        this._direction = direction == null ? 'DESC' : direction;
        return this;
    }
    render() {
        if (this._field === null) {
            return '';
        }
        return `ORDER BY ${this._field} ${this._direction}`;
    }
    clone() {
        const cp = new OrderBy();
        cp._field = this._field;
        cp._direction = this._direction;
        return cp;
    }
}
class Query {
    constructor() {
        this._binding = {};
        this._where = new Where(this);
        this._where._link = 'AND';
    }
    where(field, operator, value) {
        this._where = new Where(this);
        this._where._link = 'AND';
        this._where.addLeaf('AND', field, operator, value);
        return this._where;
    }
    andWhere(field, operator, value) {
        if (this._where.isEmpty() === true) {
            return this.where(field, operator, value);
        }
        return this._where.andWhere(field, operator, value);
    }
    orWhere(field, operator, value) {
        if (this._where.isEmpty() === true) {
            return this.where(field, operator, value);
        }
        return this._where.orWhere(field, operator, value);
    }
    getWhere() {
        return this._where;
    }
    getBinding() {
        return this._binding;
    }
    async sql(connection) {
        throw new Error('Method not implemented');
    }
    async execute(connection, releaseConnection = true) {
        let sql = await this.sql(connection);
        const binding = [];
        let id = 0;
        for (const key in this._binding) {
            if (this._binding.hasOwnProperty(key)) {
                id += 1;
                sql = sql.replace(`:${key}`, `$${id}`);
                binding.push(this._binding[key]);
            }
        }
        const { rows } = await connection.query({
            text: sql,
            values: binding
        });
        if (releaseConnection) {
            release(connection);
        }
        return rows;
    }
}
class SelectQuery extends Query {
    constructor() {
        super();
        this._select = new Select();
        this._having = new Having(this);
        this._join = new Join(this);
        this._limit = new Limit();
        this._groupBy = new GroupBy();
        this._orderBy = new OrderBy();
    }
    select(field, alias) {
        this._select.select(field, alias);
        return this;
    }
    from(table, alias) {
        this._table = table;
        this._alias = alias;
        return this;
    }
    having(field, operator, value) {
        this._having.and(field, operator, value);
        return this._having;
    }
    leftJoin(table, alias) {
        this._join.add('LEFT JOIN', table, alias);
        return this._join;
    }
    rightJoin(table, alias) {
        this._join.add('RIGHT JOIN', table, alias);
        return this._join;
    }
    innerJoin(table, alias) {
        this._join.add('INNER JOIN', table, alias);
        return this._join;
    }
    limit(offset, limit) {
        this._limit = new Limit(offset, limit);
        return this;
    }
    groupBy(...args) {
        args.forEach((element) => {
            this._groupBy.add(String(element));
        });
        return this;
    }
    orderBy(field, direction = 'ASC') {
        this._orderBy.add(field, direction);
        return this;
    }
    orderDirection(direction) {
        this._orderBy._direction = direction;
        return this;
    }
    async sql() {
        if (!this._table) {
            throw Error('You must specific table by calling `from` method');
        }
        let from = `"${this._table}"`;
        if (this._alias) {
            from += ` AS "${this._alias}"`;
        }
        return [
            this._select.render().trim(),
            'FROM',
            from.trim(),
            this._join.render().trim(),
            this._where.render().trim(),
            this._groupBy.render().trim(),
            this._having.render().trim(),
            this._orderBy.render().trim(),
            this._limit.render().trim()
        ]
            .filter((e) => e !== '')
            .join(' ');
    }
    async load(connection, releaseConnection = true) {
        this.limit(0, 1);
        const rows = await this.execute(connection, releaseConnection);
        return rows[0] || null;
    }
    async execute(connection, releaseConnection = true) {
        if (connection instanceof Pool) {
            connection = await getConnection(connection);
        }
        let sql = await this.sql();
        const binding = [];
        let i = 0;
        for (const key in this._binding) {
            if (this._binding.hasOwnProperty(key)) {
                i += 1;
                sql = sql.replace(`:${key}`, `$${i}`);
                binding.push(this._binding[key]);
            }
        }
        try {
            const { rows } = await connection.query({
                text: sql,
                values: binding
            });
            return rows;
        }
        catch (e) {
            if (connection.INTRANSACTION === true) {
                throw e;
            }
            if (e.code === '42703') {
                this.removeOrderBy();
                return await super.execute(connection, false);
            }
            else if (e.code.toLowerCase() === '22p02') {
                const countField = this._select._fields.find((f) => /COUNT\s*\(/i.test(f));
                if (countField) {
                    const alias = countField.match(/(?<=as\s)(.*)/i);
                    let aliasResult = '';
                    if (alias) {
                        aliasResult = alias[0].trim();
                        aliasResult = aliasResult.replace(/'/g, '').replace(/"/g, '');
                    }
                    else {
                        aliasResult = 'count';
                    }
                    return [{ [aliasResult]: 0 }];
                }
                else {
                    return [];
                }
            }
            else {
                throw e;
            }
        }
        finally {
            if (releaseConnection) {
                release(connection);
            }
        }
    }
    clone() {
        const cp = new SelectQuery();
        cp._table = this._table;
        cp._alias = this._alias;
        cp._where = this._where.clone(cp);
        cp._having = this._having.clone(cp);
        cp._join = this._join.clone(cp);
        cp._limit = this._limit.clone();
        cp._groupBy = this._groupBy.clone();
        cp._orderBy = this._orderBy.clone();
        return cp;
    }
    removeOrderBy() {
        this._orderBy = new OrderBy();
        return this;
    }
    removeGroupBy() {
        this._groupBy = new GroupBy();
        return this;
    }
    removeLimit() {
        this._limit = new Limit();
        return this;
    }
}
class UpdateQuery extends Query {
    constructor(table) {
        super();
        this._primaryColumn = null;
        this._data = {};
        this._table = table;
    }
    given(data) {
        if (typeof data !== 'object' || data === null) {
            throw new Error('Data must be an object and not null');
        }
        const copy = {};
        Object.keys(data).forEach((key) => {
            copy[key] = toString(data[key]);
        });
        this._data = copy;
        return this;
    }
    prime(field, value) {
        this._data[field] = toString(value);
        return this;
    }
    async sql(connection) {
        if (!this._table) {
            throw Error('You need to call specific method first');
        }
        if (Object.keys(this._data).length === 0) {
            throw Error('You need provide data first');
        }
        const { rows } = await connection.query(`SELECT 
        table_name, 
        column_name, 
        data_type, 
        is_nullable, 
        column_default, 
        is_identity, 
        identity_generation 
      FROM information_schema.columns 
      WHERE table_name = '${this._table}'`);
        const set = [];
        rows.forEach((field) => {
            if (['BY DEFAULT', 'ALWAYS'].includes(field['identity_generation'])) {
                this._primaryColumn = field['column_name'];
                return;
            }
            if (this._data[field['column_name']] === undefined) {
                return;
            }
            const key = uniqid();
            set.push(`"${field['column_name']}" = :${key}`);
            this._binding[key] = this._data[field['column_name']];
        });
        if (set.length === 0) {
            throw new Error('No data was provided' + this._table);
        }
        const sql = [
            'UPDATE',
            `"${this._table}"`,
            'SET',
            set.join(', '),
            this._where.render(),
            'RETURNING *'
        ]
            .filter((e) => e !== '')
            .join(' ');
        return sql;
    }
    async execute(connection, releaseConnection = true) {
        const rows = await super.execute(connection, releaseConnection);
        const updatedRow = rows[0];
        if (this._primaryColumn && updatedRow) {
            updatedRow['updatedId'] = updatedRow[this._primaryColumn];
        }
        return updatedRow;
    }
}
class InsertQuery extends Query {
    constructor(table) {
        super();
        this._primaryColumn = null;
        this._data = {};
        this._table = table;
    }
    given(data) {
        if (typeof data !== 'object' || data === null) {
            throw new Error('Data must be an object and not null');
        }
        const copy = {};
        Object.keys(data).forEach((key) => {
            copy[key] = toString(data[key]);
        });
        this._data = copy;
        return this;
    }
    prime(field, value) {
        this._data[field] = toString(value);
        return this;
    }
    async sql(connection) {
        if (!this._table) {
            throw Error('You need to call specific method first');
        }
        if (Object.keys(this._data).length === 0) {
            throw Error('You need provide data first');
        }
        const { rows } = await connection.query(`SELECT 
        table_name, 
        column_name, 
        data_type, 
        is_nullable, 
        column_default, 
        is_identity, 
        identity_generation 
      FROM information_schema.columns 
      WHERE table_name = '${this._table}'`);
        const fs = [];
        const vs = [];
        rows.forEach((field) => {
            if (['BY DEFAULT', 'ALWAYS'].includes(field['identity_generation'])) {
                this._primaryColumn = field['column_name'];
                return;
            }
            if (this._data[field['column_name']] === undefined) {
                return;
            }
            const key = uniqid();
            fs.push(`"${field['column_name']}"`);
            vs.push(`:${key}`);
            this._binding[key] = this._data[field['column_name']];
        });
        const sql = [
            'INSERT INTO',
            `"${this._table}"`,
            '(',
            fs.join(', '),
            ')',
            'VALUES',
            '(',
            vs.join(', '),
            ')',
            'RETURNING *'
        ]
            .filter((e) => e !== '')
            .join(' ');
        return sql;
    }
    async execute(connection, releaseConnection = true) {
        const rows = await super.execute(connection, releaseConnection);
        const insertedRow = rows[0];
        if (this._primaryColumn) {
            insertedRow['insertId'] = insertedRow[this._primaryColumn];
        }
        return insertedRow;
    }
}
class InsertOnUpdateQuery extends Query {
    constructor(table, conflictColumns) {
        super();
        this._data = {};
        this._primaryColumn = null;
        this._table = table;
        this._conflictColumns = conflictColumns;
    }
    given(data) {
        if (typeof data !== 'object' || data === null) {
            throw new Error('Data must be an object and not null');
        }
        const copy = {};
        Object.keys(data).forEach((key) => {
            copy[key] = toString(data[key]);
        });
        this._data = copy;
        return this;
    }
    prime(field, value) {
        this._data[field] = toString(value);
        return this;
    }
    async sql(connection) {
        if (!this._table) {
            throw Error('You need to call specific method first');
        }
        if (Object.keys(this._data).length === 0) {
            throw Error('You need provide data first');
        }
        const { rows } = await connection.query({
            text: `SELECT 
        table_name, 
        column_name, 
        data_type, 
        is_nullable, 
        column_default, 
        is_identity, 
        identity_generation 
      FROM information_schema.columns 
      WHERE table_name = $1`,
            values: [this._table]
        });
        const fs = [];
        const vs = [];
        const us = [];
        const usp = {};
        rows.forEach((field) => {
            if (['BY DEFAULT', 'ALWAYS'].includes(field['identity_generation'])) {
                return;
            }
            if (this._data[field['column_name']] === undefined) {
                return;
            }
            const key = uniqid();
            const ukey = uniqid();
            fs.push(`"${field['column_name']}"`);
            vs.push(`:${key}`);
            us.push(`"${field['column_name']}" = :${ukey}`);
            usp[ukey] = this._data[field['column_name']];
            this._binding[key] = this._data[field['column_name']];
        });
        this._binding = { ...this._binding, ...usp };
        const sql = [
            'INSERT INTO',
            `"${this._table}"`,
            '(',
            fs.join(', '),
            ')',
            'VALUES',
            '(',
            vs.join(', '),
            ')',
            `ON CONFLICT (${this._conflictColumns.join(',')}) DO UPDATE SET`,
            us.join(', '),
            'RETURNING *'
        ]
            .filter((e) => e !== '')
            .join(' ');
        return sql;
    }
    async execute(connection, releaseConnection = true) {
        const rows = await super.execute(connection, releaseConnection);
        const insertedRow = rows[0];
        if (this._primaryColumn) {
            insertedRow['insertId'] = insertedRow[this._primaryColumn];
        }
        return insertedRow;
    }
}
class DeleteQuery extends Query {
    constructor(table) {
        super();
        this._table = table;
    }
    async sql() {
        if (!this._table) {
            throw Error('You need to call specific method first');
        }
        return [
            'DELETE FROM',
            `"${this._table}"`,
            this._where.render().trim()
        ].join(' ');
    }
}
// Connection management functions
async function getConnection(pool) {
    return await pool.connect();
}
async function startTransaction(connection) {
    await connection.query('BEGIN');
    connection.INTRANSACTION = true;
    connection.COMMITTED = false;
}
async function commit(connection) {
    await connection.query('COMMIT');
    connection.INTRANSACTION = false;
    connection.COMMITTED = true;
    release(connection);
}
async function rollback(connection) {
    await connection.query('ROLLBACK');
    connection.INTRANSACTION = false;
    connection.release();
}
function release(connection) {
    // Check if connection is a Pool instance
    if (connection instanceof Pool) {
        return;
    }
    if (connection.INTRANSACTION === true) {
        return;
    }
    connection.release();
}
async function execute(connection, query) {
    return await connection.query(query);
}
function sql(value) {
    return {
        value: value,
        isSQL: true
    };
}
function value(val) {
    return {
        value: val,
        isSQL: false
    };
}
// Factory functions
function select(...args) {
    const selectQuery = new SelectQuery();
    if (args[0] === '*') {
        selectQuery.select('*');
        return selectQuery;
    }
    args.forEach((arg) => {
        if (typeof arg === 'string')
            selectQuery.select(arg);
    });
    return selectQuery;
}
function insert(table) {
    return new InsertQuery(table);
}
function insertOnUpdate(table, conflictColumns) {
    // Check if conflictColumns is an array and not empty
    if (!Array.isArray(conflictColumns) || conflictColumns.length === 0) {
        throw new Error('conflictColumns must be an array and not empty');
    }
    return new InsertOnUpdateQuery(table, conflictColumns);
}
function update(table) {
    return new UpdateQuery(table);
}
function del(table) {
    return new DeleteQuery(table);
}
function node(link) {
    const nodeInstance = new Node();
    nodeInstance._link = link;
    return nodeInstance;
}
export { select, insert, update, node, del, insertOnUpdate, getConnection, startTransaction, commit, rollback, release, execute, sql, value, 
// Types for external usage
SelectQuery, UpdateQuery, InsertQuery, InsertOnUpdateQuery, DeleteQuery, Pool };
//# sourceMappingURL=index.js.map