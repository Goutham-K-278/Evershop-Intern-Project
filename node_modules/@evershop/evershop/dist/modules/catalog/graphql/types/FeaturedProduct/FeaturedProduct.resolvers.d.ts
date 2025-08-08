declare namespace _default {
    namespace Query {
        function featuredProducts(root: any, { limit }: {
            limit?: number | undefined;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[]>;
    }
}
export default _default;
