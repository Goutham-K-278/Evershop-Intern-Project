import { ProductData } from './createProduct.js';
/**
 * Delete product service. This service will delete a product with all related data
 * @param {String} uuid
 * @param {Object} context
 */
declare const _default: (uuid: string, context: Record<string, any>) => Promise<ProductData>;
export default _default;
