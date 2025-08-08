declare namespace _default {
    namespace Product {
        function price(product: any): Promise<{
            regular: string | number;
            special: string | number;
        }>;
    }
}
export default _default;
