export function CheckoutProvider({ children, cartId, placeOrderAPI, getPaymentMethodAPI, checkoutSuccessUrl }: {
    children: any;
    cartId: any;
    placeOrderAPI: any;
    getPaymentMethodAPI: any;
    checkoutSuccessUrl: any;
}): React.JSX.Element;
export namespace CheckoutProvider {
    namespace propTypes {
        let children: any;
        let cartId: any;
        let placeOrderAPI: any;
        let getPaymentMethodAPI: any;
        let checkoutSuccessUrl: any;
    }
}
export function useCheckout(): any;
export function useCheckoutDispatch(): any;
import React from 'react';
