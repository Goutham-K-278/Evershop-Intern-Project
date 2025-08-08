export type CollectionData = {
    name: string;
    description: string;
    code: string;
    [key: string]: any;
};
/**
 * Create collection service. This service will create a collection with all related data
 * @param {Object} data
 * @param {Object} context
 */
declare const _default: (data: CollectionData, context: Record<string, any>) => Promise<any>;
export default _default;
