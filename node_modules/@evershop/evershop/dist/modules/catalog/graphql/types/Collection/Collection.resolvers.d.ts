declare namespace _default {
    namespace Query {
        function collection(_: any, { code }: {
            code: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function collections(_: any, { filters }: {
            filters?: never[] | undefined;
        }): Promise<CollectionCollection>;
    }
    namespace Collection {
        function products(collection: any, { filters }: {
            filters?: never[] | undefined;
        }, { user }: {
            user: any;
        }): Promise<ProductCollection>;
        function description({ description }: {
            description: any;
        }): any;
    }
    namespace Product {
        export function collections_1(product: any, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[]>;
        export { collections_1 as collections };
    }
}
export default _default;
import { CollectionCollection } from '../../../../../modules/catalog/services/CollectionCollection.js';
import { ProductCollection } from '../../../../../modules/catalog/services/ProductCollection.js';
