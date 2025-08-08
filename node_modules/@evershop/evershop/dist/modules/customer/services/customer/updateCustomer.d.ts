import { CustomerData } from './createCustomer.js';
/**
 * Update customer service. This service will update a customer with all related data
 * @param {String} uuid
 * @param {Object} data
 * @param {Object} context
 */
declare const _default: (uuid: string, data: CustomerData, context: Record<string, any>) => Promise<CustomerData>;
export default _default;
