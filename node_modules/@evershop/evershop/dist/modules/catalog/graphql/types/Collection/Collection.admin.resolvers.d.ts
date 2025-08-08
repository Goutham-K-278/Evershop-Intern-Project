declare namespace _default {
    namespace Collection {
        function editUrl(collection: any): string;
        function addProductUrl(collection: any): string;
        function updateApi(collection: any): string;
        function deleteApi(collection: any): string;
    }
    namespace Product {
        function removeFromCollectionUrl(product: any, _: any, { pool }: {
            pool: any;
        }): Promise<string | null>;
    }
}
export default _default;
