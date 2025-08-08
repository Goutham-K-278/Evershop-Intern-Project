export default Summary;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    cart(id: getContextValue('cartId', null)) {\n      totalQty\n      subTotal {\n        value\n        text\n      }\n      subTotalInclTax {\n        value\n        text\n      }\n      grandTotal {\n        value\n        text\n      }\n      \n      totalTaxAmount {\n        value\n        text\n      }\n      discountAmount {\n        value\n        text\n      }\n      coupon\n    }\n    setting {\n      priceIncludingTax\n    }\n    checkoutUrl: url(routeId: \"checkout\")\n  }\n";
declare function Summary({ checkoutUrl, cart: { totalQty, subTotal, subTotalInclTax, totalTaxAmount, grandTotal, coupon, discountAmount }, setting: { priceIncludingTax } }: {
    checkoutUrl: any;
    cart: {
        totalQty: any;
        subTotal: any;
        subTotalInclTax: any;
        totalTaxAmount: any;
        grandTotal: any;
        coupon: any;
        discountAmount: any;
    };
    setting: {
        priceIncludingTax: any;
    };
}): React.JSX.Element | null;
declare namespace Summary {
    namespace propTypes {
        let checkoutUrl: any;
        let cart: any;
        let setting: any;
    }
}
import React from 'react';
