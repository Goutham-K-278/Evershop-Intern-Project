declare namespace _default {
    namespace Query {
        function currentCustomer(root: any, args: any, { customer }: {
            customer: any;
        }): Promise<Record<string, any> | null>;
    }
    namespace Customer {
        function addresses(customer: any, args: any, { pool }: {
            pool: any;
        }): Promise<{
            updateApi: string;
            deleteApi: string;
        }[]>;
        function addAddressApi(customer: any): string;
    }
}
export default _default;
