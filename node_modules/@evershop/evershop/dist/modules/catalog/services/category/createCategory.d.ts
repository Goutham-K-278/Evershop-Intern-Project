export type CategoryData = {
    name: string;
    url_key: string;
    [key: string]: any;
};
/**
 * Create category service. This service will create a category with all related data
 * @param {Object} data
 * @param {Object} context
 */
declare const _default: (data: CategoryData, context: Record<string, any>) => Promise<any>;
export default _default;
