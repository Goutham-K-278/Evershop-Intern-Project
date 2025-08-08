export const products: ({
    product_id: number;
    name: string;
    sku: string;
    price: number;
    status: boolean;
    qty: number;
    tax_class: number;
} | {
    product_id: number;
    name: string;
    sku: string;
    price: number;
    status: boolean;
    qty: number;
    tax_class: null;
})[];
