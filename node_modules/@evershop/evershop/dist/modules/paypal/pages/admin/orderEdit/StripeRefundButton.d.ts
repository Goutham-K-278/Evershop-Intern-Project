declare function StripeRefundButton({ refundAPI, order: { paymentStatus, orderId, paymentMethod, grandTotal } }: {
    refundAPI: any;
    order: {
        paymentStatus: any;
        orderId: any;
        paymentMethod: any;
        grandTotal: any;
    };
}): React.JSX.Element;
declare namespace StripeRefundButton {
    namespace propTypes {
        let refundAPI: any;
        let order: any;
    }
}
export default StripeRefundButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    refundAPI: url(routeId: \"refundPaymentIntent\")\n    order(uuid: getContextValue(\"orderId\")) {\n      orderId\n      grandTotal {\n        value\n        currency\n      }\n      paymentStatus {\n        code\n      }\n      paymentMethod\n    }\n  }\n";
import React from 'react';
