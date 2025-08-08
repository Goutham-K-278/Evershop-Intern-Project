declare namespace _default {
    namespace Product {
        function url(product: any, _: any, { pool }: {
            pool: any;
        }): Promise<any>;
        function description({ description }: {
            description: any;
        }): any;
    }
    namespace Query {
        function product(_: any, { id }: {
            id: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function products(_: any, { filters }: {
            filters?: never[] | undefined;
        }, { user }: {
            user: any;
        }): Promise<ProductCollection>;
    }
}
export default _default;
import { ProductCollection } from '../../../../../modules/catalog/services/ProductCollection.js';
