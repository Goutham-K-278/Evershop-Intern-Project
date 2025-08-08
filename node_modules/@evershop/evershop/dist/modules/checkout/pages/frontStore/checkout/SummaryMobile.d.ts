declare function Summary({ cart, setting: { priceIncludingTax } }: {
    cart: any;
    setting: {
        priceIncludingTax: any;
    };
}): React.JSX.Element;
declare namespace Summary {
    namespace propTypes {
        let cart: any;
        let setting: any;
    }
}
export default Summary;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    cart {\n      totalQty\n      subTotal {\n        value\n        text\n      }\n      subTotalInclTax {\n        value\n        text\n      }\n      grandTotal {\n        value\n        text\n      }\n      discountAmount {\n        value\n        text\n      }\n      totalTaxAmount {\n        value\n        text\n      }\n      shippingFeeInclTax {\n        value\n        text\n      }\n      shippingMethodName\n      coupon\n      items {\n        thumbnail\n        productName\n        productSku\n        qty\n        variantOptions\n        lineTotalInclTax {\n          value\n          text\n        }\n        lineTotal {\n          value\n          text\n        }\n      }\n    }\n    setting {\n      priceIncludingTax\n    }\n  }\n";
import React from 'react';
