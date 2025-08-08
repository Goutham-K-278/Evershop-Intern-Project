declare namespace _default {
    namespace Query {
        function customer(root: any, { id }: {
            id: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function customers(_: any, { filters }: {
            filters?: never[] | undefined;
        }): Promise<CustomerCollection>;
    }
    namespace Customer {
        function editUrl({ uuid }: {
            uuid: any;
        }): string;
        function updateApi(customer: any): string;
        function deleteApi(customer: any): string;
    }
}
export default _default;
import { CustomerCollection } from '../../../services/CustomerCollection.js';
