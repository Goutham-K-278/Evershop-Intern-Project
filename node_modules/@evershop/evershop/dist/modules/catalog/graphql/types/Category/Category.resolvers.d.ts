declare namespace _default {
    namespace Query {
        function category(_: any, { id }: {
            id: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function categories(_: any, { filters }: {
            filters?: never[] | undefined;
        }, { user }: {
            user: any;
        }): Promise<CategoryCollection>;
    }
    namespace Category {
        function products(category: any, { filters }: {
            filters?: never[] | undefined;
        }, { user }: {
            user: any;
        }): Promise<ProductCollection>;
        function availableAttributes(category: any): Promise<{
            attributeName: any;
            attributeId: any;
            attributeCode: any;
            options: {
                optionId: any;
                optionText: any;
            }[];
        }[]>;
        function priceRange(category: any, _: any, { pool }: {
            pool: any;
        }): Promise<{
            min: any;
            max: any;
        }>;
        function url(category: any, _: any, { pool }: {
            pool: any;
        }): Promise<any>;
        function image(category: any): {
            alt: any;
            url: any;
        } | null;
        function children(category: any, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[]>;
        function path(category: any, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[]>;
        function parent(category: any, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function description({ description }: {
            description: any;
        }): any;
    }
    namespace Product {
        export function category_1(product: any, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        export { category_1 as category };
    }
}
export default _default;
import { CategoryCollection } from '../../../../../modules/catalog/services/CategoryCollection.js';
import { ProductCollection } from '../../../../../modules/catalog/services/ProductCollection.js';
