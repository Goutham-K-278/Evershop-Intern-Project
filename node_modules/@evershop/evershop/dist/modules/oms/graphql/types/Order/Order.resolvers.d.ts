declare namespace _default {
    namespace Query {
        function order(_: any, { uuid }: {
            uuid: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
    }
    namespace Order {
        function items({ orderId }: {
            orderId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[]>;
        function shippingAddress({ shippingAddressId }: {
            shippingAddressId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function billingAddress({ billingAddressId }: {
            billingAddressId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function activities({ orderId }: {
            orderId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[] | null>;
        function shipment({ orderId, uuid }: {
            orderId: any;
            uuid: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<{
            orderUuid: any;
        } | null>;
        function shipmentStatus({ shipmentStatus }: {
            shipmentStatus: any;
        }): any;
        function paymentStatus({ paymentStatus }: {
            paymentStatus: any;
        }): any;
        function status({ status }: {
            status: any;
        }): any;
    }
    namespace Customer {
        function orders({ customerId }: {
            customerId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[]>;
    }
    namespace OrderItem {
        function productUrl({ productId }: {
            productId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<string | null>;
        function total({ lineTotalInclTax }: {
            lineTotalInclTax: any;
        }): any;
        function subTotal({ lineTotal }: {
            lineTotal: any;
        }): any;
    }
}
export default _default;
