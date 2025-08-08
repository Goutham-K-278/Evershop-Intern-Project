declare namespace _default {
    namespace Order {
        function paymentTransactions({ orderId }: {
            orderId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[]>;
    }
}
export default _default;
