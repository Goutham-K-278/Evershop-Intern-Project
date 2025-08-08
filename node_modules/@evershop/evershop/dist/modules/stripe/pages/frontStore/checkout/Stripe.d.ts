declare function StripeMethod({ setting, cart: { grandTotal, currency }, returnUrl, createPaymentIntentApi }: {
    setting: any;
    cart: {
        grandTotal: any;
        currency: any;
    };
    returnUrl: any;
    createPaymentIntentApi: any;
}): React.JSX.Element;
declare namespace StripeMethod {
    namespace propTypes {
        let setting: any;
        let cart: any;
        let returnUrl: any;
        let createPaymentIntentApi: any;
    }
}
export default StripeMethod;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    setting {\n      stripeDisplayName\n      stripePublishableKey\n      stripePaymentMode\n    }\n    cart {\n      grandTotal {\n        value\n      }\n      currency\n    }\n    returnUrl: url(routeId: \"stripeReturn\")\n    createPaymentIntentApi: url(routeId: \"createPaymentIntent\")\n  }\n";
import React from 'react';
