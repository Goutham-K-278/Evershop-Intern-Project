import { CustomerData } from './createCustomer.js';
/**
 * Delete customer service. This service will delete a customer with all related data
 * @param {String} uuid
 * @param {Object} context
 */
declare const _default: (uuid: string, context: Record<string, any>) => Promise<CustomerData>;
export default _default;
