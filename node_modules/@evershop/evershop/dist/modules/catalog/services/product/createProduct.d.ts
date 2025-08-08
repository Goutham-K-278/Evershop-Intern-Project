export type ProductData = ProductInventoryData & {
    name: string;
    url_key?: string;
    status: string;
    sku: string;
    price: number;
    group_id: number;
    visibility?: string;
    attributes?: ProductAttributeData[];
    images?: string[];
    [key: string]: any;
};
export type ProductInventoryData = {
    qty: number;
    manage_stock: boolean;
    stock_availability: boolean;
    [key: string]: any;
};
export type ProductAttributeData = {
    attribute_code: string;
    value: string;
    [key: string]: any;
};
/**
 * Create product service. This service will create a product with all related data
 * @param {Object} data
 * @param {Object} context
 */
declare const _default: (data: ProductData, context: Record<string, any>) => Promise<any>;
export default _default;
