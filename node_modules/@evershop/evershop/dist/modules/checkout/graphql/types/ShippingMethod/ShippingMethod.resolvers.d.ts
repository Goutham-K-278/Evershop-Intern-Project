declare namespace _default {
    namespace Query {
        function shippingMethods(): Promise<Record<string, any>[]>;
    }
    namespace ShippingMethod {
        function updateApi({ uuid }: {
            uuid: any;
        }): string;
    }
}
export default _default;
