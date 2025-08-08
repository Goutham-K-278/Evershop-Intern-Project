declare function StripePayment({ setting: { stripePaymentStatus, stripeDisplayName, stripePublishableKey, stripeSecretKey, stripeEndpointSecret, stripePaymentMode } }: {
    setting: {
        stripePaymentStatus: any;
        stripeDisplayName: any;
        stripePublishableKey: any;
        stripeSecretKey: any;
        stripeEndpointSecret: any;
        stripePaymentMode: any;
    };
}): React.JSX.Element;
declare namespace StripePayment {
    namespace propTypes {
        let setting: any;
    }
}
export default StripePayment;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    setting {\n      stripeDisplayName\n      stripePaymentStatus\n      stripePublishableKey\n      stripeSecretKey\n      stripeEndpointSecret\n      stripePaymentMode\n    }\n  }\n";
import React from 'react';
