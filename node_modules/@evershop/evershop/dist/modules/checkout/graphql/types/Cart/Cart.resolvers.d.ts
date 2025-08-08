declare namespace _default {
    namespace Query {
        function cart(_: any, { id }: {
            id: any;
        }, { cartId }: {
            cartId: any;
        }): Promise<Record<string, any> | null>;
    }
    namespace Cart {
        function items(cart: any): Promise<any>;
        function shippingAddress({ shippingAddressId }: {
            shippingAddressId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function billingAddress({ billingAddressId }: {
            billingAddressId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function addItemApi(cart: any): string;
        function addPaymentMethodApi(cart: any): string;
        function addShippingMethodApi(cart: any): string;
        function addContactInfoApi(cart: any): string;
        function addAddressApi(cart: any): string;
        function addNoteApi(cart: any): string;
    }
    namespace CartItem {
        function total({ lineTotalInclTax }: {
            lineTotalInclTax: any;
        }): any;
        function subTotal({ lineTotal }: {
            lineTotal: any;
        }): any;
    }
}
export default _default;
