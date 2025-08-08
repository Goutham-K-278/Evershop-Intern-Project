declare function CheckoutPage({ checkout: { cartId }, placeOrderAPI, getPaymentMethodAPI, checkoutSuccessUrl }: {
    checkout: {
        cartId: any;
    };
    placeOrderAPI: any;
    getPaymentMethodAPI: any;
    checkoutSuccessUrl: any;
}): React.JSX.Element;
declare namespace CheckoutPage {
    namespace propTypes {
        let checkoutSuccessUrl: any;
        let getPaymentMethodAPI: any;
        let placeOrderAPI: any;
        let checkout: any;
    }
}
export default CheckoutPage;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    checkout {\n      cartId\n    }\n    placeOrderAPI: url(routeId: \"createOrder\")\n    getPaymentMethodAPI: url(routeId: \"getPaymentMethods\")\n    checkoutSuccessUrl: url(routeId: \"checkoutSuccess\")\n  }\n";
import React from 'react';
