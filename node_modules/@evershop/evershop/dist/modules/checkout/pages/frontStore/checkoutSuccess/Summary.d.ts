declare function Summary({ order, setting: { priceIncludingTax } }: {
    order: any;
    setting: {
        priceIncludingTax: any;
    };
}): React.JSX.Element;
declare namespace Summary {
    namespace propTypes {
        let order: any;
        let setting: any;
    }
}
export default Summary;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order (uuid: getContextValue('orderId')) {\n      orderNumber\n      discountAmount {\n        value\n        text\n      }\n      coupon\n      shippingMethodName\n      shippingFeeInclTax {\n        value\n        text\n      }\n      totalTaxAmount {\n        value\n        text\n      }\n      subTotal {\n        value\n        text\n      }\n      subTotalInclTax {\n        value\n        text\n      }\n      grandTotal {\n        value\n        text\n      }\n      items {\n        productName\n        thumbnail\n        productSku\n        qty\n        variantOptions\n        lineTotalInclTax {\n          value\n          text\n        }\n        lineTotal {\n          value\n          text\n        }\n      }\n    }\n    setting {\n      priceIncludingTax\n    }\n  }\n";
import React from 'react';
