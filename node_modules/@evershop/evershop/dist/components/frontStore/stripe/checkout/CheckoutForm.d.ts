declare function CheckoutForm({ stripePublishableKey, createPaymentIntentApi, returnUrl }: {
    stripePublishableKey: any;
    createPaymentIntentApi: any;
    returnUrl: any;
}): React.JSX.Element | null;
declare namespace CheckoutForm {
    namespace propTypes {
        let stripePublishableKey: any;
        let returnUrl: any;
        let createPaymentIntentApi: any;
    }
}
export default CheckoutForm;
import React from 'react';
