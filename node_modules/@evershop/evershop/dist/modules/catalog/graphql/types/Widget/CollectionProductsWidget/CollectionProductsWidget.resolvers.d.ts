declare namespace _default {
    namespace Query {
        function collectionProductsWidget(root: any, { collection, count }: {
            collection: any;
            count: any;
        }): Promise<{
            collection: any;
            count: number;
        }>;
    }
}
export default _default;
