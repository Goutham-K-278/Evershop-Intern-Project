declare namespace _default {
    namespace Query {
        function customerGroup(root: any, { id }: {
            id: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function customerGroups(_: any, { filters }: {
            filters?: never[] | undefined;
        }): Promise<CustomerGroupCollection>;
    }
    namespace CustomerGroup {
        function customers(group: any, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[]>;
        function editUrl(group: any): string;
    }
}
export default _default;
import { CustomerGroupCollection } from '../../../services/CustomerGroupCollection.js';
