import { startTransaction, commit, rollback, insert } from '@evershop/postgres-query-builder';
import { getConnection } from '../../../../lib/postgres/connection.js';
import { hookable } from '../../../../lib/util/hookable.js';
import { getValueSync, getValue } from '../../../../lib/util/registry.js';
import { getAjv } from '../../../base/services/getAjv.js';
import collectionDataSchema from './collectionDataSchema.json' with { type: 'json' };
function validateCollectionDataBeforeInsert(data) {
    const ajv = getAjv();
    collectionDataSchema.required = ['name', 'description', 'code'];
    const jsonSchema = getValueSync('createCollectionDataJsonSchema', collectionDataSchema, {});
    const validate = ajv.compile(jsonSchema);
    const valid = validate(data);
    if (valid) {
        return data;
    }
    else {
        throw new Error(validate.errors[0].message);
    }
}
async function insertCollectionData(data, connection) {
    const collection = await insert('collection').given(data).execute(connection);
    return collection;
}
/**
 * Create collection service. This service will create a collection with all related data
 * @param {Object} data
 * @param {Object} context
 */
async function createCollection(data, context) {
    const connection = await getConnection();
    await startTransaction(connection);
    const hookContext = { connection, ...context };
    try {
        const collectionData = await getValue('collectionDataBeforeCreate', data);
        // Validate collection data
        validateCollectionDataBeforeInsert(collectionData);
        // Insert collection data
        const collection = await hookable(insertCollectionData, hookContext)(collectionData, connection);
        await commit(connection);
        return collection;
    }
    catch (e) {
        await rollback(connection);
        throw e;
    }
}
/**
 * Create collection service. This service will create a collection with all related data
 * @param {Object} data
 * @param {Object} context
 */
export default async (data, context) => {
    // Make sure the context is either not provided or is an object
    if (context && typeof context !== 'object') {
        throw new Error('Context must be an object');
    }
    const collection = await hookable(createCollection)(data, context);
    return collection;
};
//# sourceMappingURL=createCollection.js.map