export const coupons: {
    coupon_id: number;
    uuid: string;
    status: boolean;
    description: string;
    discount_amount: number;
    free_shipping: boolean;
    discount_type: string;
    coupon: string;
    used_time: number;
    target_products: never[];
    condition: {
        order_qty: string;
        order_total: string;
    };
    user_condition: {
        email: string;
        groups: string[];
        purchased: string;
    };
    buyx_gety: {
        sku: string;
        max_y: number;
        buy_qty: number;
        get_qty: number;
        discount: number;
    }[];
    max_uses_time_per_coupon: null;
    max_uses_time_per_customer: null;
    start_date: null;
    end_date: null;
    created_at: string;
    updated_at: string;
}[];
