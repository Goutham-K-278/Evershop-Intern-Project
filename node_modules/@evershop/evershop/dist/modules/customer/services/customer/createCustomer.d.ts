export type CustomerData = {
    email?: string;
    full_name?: string;
    password?: string;
    group_id?: number;
    status?: number;
    [key: string]: unknown;
};
/**
 * Create customer service. This service will create a customer with all related data
 * @param {Object} data
 * @param {Object} context
 */
declare const _default: (data: CustomerData, context: Record<string, unknown>) => Promise<CustomerData>;
export default _default;
