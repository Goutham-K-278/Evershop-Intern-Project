declare function OrderSummary({ order: { orderId, coupon, shippingMethodName, paymentMethodName, totalQty, totalTaxAmount, discountAmount, grandTotal, subTotal, shippingFeeInclTax, currency, paymentStatus } }: {
    order: {
        orderId: any;
        coupon: any;
        shippingMethodName: any;
        paymentMethodName: any;
        totalQty: any;
        totalTaxAmount: any;
        discountAmount: any;
        grandTotal: any;
        subTotal: any;
        shippingFeeInclTax: any;
        currency: any;
        paymentStatus: any;
    };
}): React.JSX.Element;
declare namespace OrderSummary {
    namespace propTypes {
        let order: any;
    }
}
export default OrderSummary;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      orderId\n      totalQty\n      coupon\n      shippingMethodName\n      paymentMethod\n      paymentMethodName\n      totalTaxAmount {\n        text(currency: getContextValue(\"orderCurrency\"))\n      }\n      discountAmount {\n        text(currency: getContextValue(\"orderCurrency\"))\n      }\n      grandTotal {\n        text(currency: getContextValue(\"orderCurrency\"))\n      }\n      subTotal {\n        text(currency: getContextValue(\"orderCurrency\"))\n      }\n      shippingFeeInclTax {\n        text(currency: getContextValue(\"orderCurrency\"))\n      }\n      currency\n      paymentStatus {\n        code\n        badge\n        progress\n        name\n      }\n    }\n  }\n";
import React from 'react';
