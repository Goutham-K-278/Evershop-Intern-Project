import type { ProductData } from './createProduct.js';
/**
 * Update product service. This service will update a product with all related data
 * @param {String} uuid
 * @param {Object} data
 * @param {Object} context
 */
declare const _default: (uuid: string, data: ProductData, context: Record<string, any>) => Promise<any>;
export default _default;
