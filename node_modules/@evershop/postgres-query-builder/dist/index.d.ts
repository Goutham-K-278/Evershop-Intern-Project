import { PoolClient as PgPoolClient, Pool, QueryResult } from 'pg';
interface SQLValue {
    value: any;
    isSQL: boolean;
}
type Binding = Record<string, any>;
interface PoolClient extends PgPoolClient {
    INTRANSACTION?: boolean;
    COMMITTED?: boolean;
}
declare class Select {
    _fields: string[];
    constructor();
    select(field: string | SQLValue, alias?: string): Select;
    render(): string;
    clone(): Select;
}
declare class RawLeaf {
    _link: string;
    _binding: Binding;
    _rawSql: string;
    _parent?: Node;
    constructor(link: string, rawSql: string, binding?: Binding);
    getBinding(): Binding;
    parent(): Node | undefined;
    render(): string;
    clone(node: Node): RawLeaf;
}
declare class Leaf {
    _binding: Binding;
    _value: string;
    _link: string;
    _field: string;
    _operator: string;
    _parent?: Node;
    constructor(link: string, field: string, operator: string, value: any, node?: Node);
    getBinding(): Binding;
    parent(): Node | undefined;
    render(): string;
    clone(node: Node): Leaf;
}
type TreeElement = Leaf | RawLeaf | Node;
type ValueTreatment = 'value' | 'sql';
declare class Node {
    _defaultValueTreatment: ValueTreatment;
    _tree: TreeElement[];
    _link?: string;
    _parent?: Node | Where | Having;
    _query?: Query | SelectQuery;
    constructor(query?: Query | SelectQuery, defaultValueTreatment?: ValueTreatment);
    addLeaf(link: string, field: string, operator: string, value: any): Node;
    addRaw(link: string, sql: string, binding?: Binding): Node;
    addNode(node: Node): Node;
    empty(): Node;
    getLeafs(): (Leaf | RawLeaf)[];
    getNodes(): Node[];
    isEmpty(): boolean;
    findLeaf(link: string, field: string, operator: string, value: any): Leaf | undefined;
    getBinding(): Binding;
    and(field: string, operator: string, value: any): Node;
    or(field: string, operator: string, value: any): Node;
    render(): string;
    execute(connection: PoolClient, releaseConnection?: boolean): Promise<any[]>;
    load(connection: PoolClient | Pool, releaseConnection?: boolean): Promise<any>;
    clone(query?: Query | SelectQuery, parent?: Node): Node;
}
export interface JoinDefinition {
    type: string;
    table: string;
    alias: string;
    on: Node;
}
declare class Join {
    _joins: JoinDefinition[];
    _query: SelectQuery;
    constructor(query: SelectQuery);
    add(type: string, table: string, alias?: string): Join;
    on(column: string, operator: string, referencedColumn: any): Node;
    render(): string;
    clone(query: SelectQuery): Join;
}
declare class Where extends Node {
    constructor(query: Query);
    render(): string;
    andWhere(field: string, operator: string, value: any): Node;
    orWhere(field: string, operator: string, value: any): Node;
    clone(query: Query): Where;
}
declare class Having extends Node {
    constructor(query: SelectQuery);
    render(): string;
    clone(query: SelectQuery): Having;
}
declare class Limit {
    _offset: number | null;
    _limit: number | null;
    constructor(offset?: number | null, limit?: number | null);
    render(): string;
    clone(): Limit;
}
declare class GroupBy {
    _fields: string[];
    constructor();
    add(field: string): GroupBy;
    render(): string;
    clone(): GroupBy;
}
declare class OrderBy {
    _field: string | null;
    _direction: string;
    constructor();
    add(field: string, direction?: string): OrderBy;
    render(): string;
    clone(): OrderBy;
}
declare class Query {
    _where: Where;
    _binding: Binding;
    constructor();
    where(field: string, operator: string, value: any): Where;
    andWhere(field: string, operator: string, value: any): Node;
    orWhere(field: string, operator: string, value: any): Node;
    getWhere(): Where;
    getBinding(): Binding;
    sql(connection?: PoolClient | Pool): Promise<string>;
    execute(connection: PoolClient | Pool, releaseConnection?: boolean): Promise<any[]>;
}
declare class SelectQuery extends Query {
    _table?: string;
    _alias?: string;
    _select: Select;
    _having: Having;
    _join: Join;
    _limit: Limit;
    _groupBy: GroupBy;
    _orderBy: OrderBy;
    constructor();
    select(field: string | SQLValue, alias?: string): SelectQuery;
    from(table: string, alias?: string): SelectQuery;
    having(field: string, operator: string, value: any): Having;
    leftJoin(table: string, alias?: string): Join;
    rightJoin(table: string, alias?: string): Join;
    innerJoin(table: string, alias?: string): Join;
    limit(offset: number, limit: number): SelectQuery;
    groupBy(...args: string[]): SelectQuery;
    orderBy(field: string, direction?: string): SelectQuery;
    orderDirection(direction: string): SelectQuery;
    sql(): Promise<string>;
    load(connection: PoolClient | Pool, releaseConnection?: boolean): Promise<any>;
    execute(connection: PoolClient | Pool, releaseConnection?: boolean): Promise<any[]>;
    clone(): SelectQuery;
    removeOrderBy(): SelectQuery;
    removeGroupBy(): SelectQuery;
    removeLimit(): SelectQuery;
}
declare class UpdateQuery extends Query {
    _table: string;
    _primaryColumn: string | null;
    _data: Record<string, any>;
    constructor(table: string);
    given(data: Record<string, any>): UpdateQuery;
    prime(field: string, value: any): UpdateQuery;
    sql(connection: PoolClient): Promise<string>;
    execute(connection: PoolClient | Pool, releaseConnection?: boolean): Promise<any>;
}
declare class InsertQuery extends Query {
    _table: string;
    _primaryColumn: string | null;
    _data: Record<string, any>;
    constructor(table: string);
    given(data: Record<string, any>): InsertQuery;
    prime(field: string, value: any): InsertQuery;
    sql(connection: PoolClient): Promise<string>;
    execute(connection: PoolClient | Pool, releaseConnection?: boolean): Promise<any>;
}
declare class InsertOnUpdateQuery extends Query {
    _table: string;
    _data: Record<string, any>;
    _conflictColumns: string[];
    _primaryColumn: string | null;
    constructor(table: string, conflictColumns: string[]);
    given(data: Record<string, any>): InsertOnUpdateQuery;
    prime(field: string, value: any): InsertOnUpdateQuery;
    sql(connection: PoolClient): Promise<string>;
    execute(connection: PoolClient | Pool, releaseConnection?: boolean): Promise<any>;
}
declare class DeleteQuery extends Query {
    _table: string;
    constructor(table: string);
    sql(): Promise<string>;
}
declare function getConnection(pool: Pool): Promise<PoolClient>;
declare function startTransaction(connection: PoolClient): Promise<void>;
declare function commit(connection: PoolClient): Promise<void>;
declare function rollback(connection: PoolClient): Promise<void>;
declare function release(connection: PoolClient | Pool): void;
declare function execute(connection: PoolClient | Pool, query: string): Promise<QueryResult>;
declare function sql(value: any): SQLValue;
declare function value(val: any): SQLValue;
declare function select(...args: string[]): SelectQuery;
declare function insert(table: string): InsertQuery;
declare function insertOnUpdate(table: string, conflictColumns: string[]): InsertOnUpdateQuery;
declare function update(table: string): UpdateQuery;
declare function del(table: string): DeleteQuery;
declare function node(link: string): Node;
export { select, insert, update, node, del, insertOnUpdate, getConnection, startTransaction, commit, rollback, release, execute, sql, value, SelectQuery, UpdateQuery, InsertQuery, InsertOnUpdateQuery, DeleteQuery, SQLValue, Binding, Pool, PoolClient };
