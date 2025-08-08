declare namespace _default {
    namespace Product {
        function variantGroup(product: any, _: any, { pool, user }: {
            pool: any;
            user: any;
        }): Promise<{
            variantGroupId: any;
            variantAttributes: {
                attributeId: any;
                attributeCode: any;
                attributeName: any;
                options: {
                    optionId: any;
                    optionText: any;
                    productId: any;
                }[];
            }[];
            items: () => any;
            addItemApi: string;
        } | null>;
    }
    namespace Variant {
        function product({ productId }: {
            productId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
    }
}
export default _default;
