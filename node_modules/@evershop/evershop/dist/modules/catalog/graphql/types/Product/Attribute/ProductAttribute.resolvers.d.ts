declare namespace _default {
    namespace Product {
        function attributeIndex(product: any, _: any, { pool, user }: {
            pool: any;
            user: any;
        }): Promise<Record<string, any>[]>;
        function attributes(product: any, _: any, { pool, user }: {
            pool: any;
            user: any;
        }): Promise<Record<string, any>[]>;
    }
}
export default _default;
