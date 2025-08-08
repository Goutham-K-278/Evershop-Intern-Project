declare namespace _default {
    namespace Category {
        function editUrl(category: any): string;
        function updateApi(category: any): string;
        function deleteApi(category: any): string;
        function addProductUrl(category: any): string;
    }
    namespace Product {
        function removeFromCategoryUrl(product: any, _: any, { pool }: {
            pool: any;
        }): Promise<string | null>;
    }
}
export default _default;
