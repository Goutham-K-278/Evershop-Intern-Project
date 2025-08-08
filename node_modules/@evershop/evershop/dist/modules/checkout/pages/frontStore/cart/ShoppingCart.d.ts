declare function ShoppingCart({ cart, setting }: {
    cart: any;
    setting: any;
}): React.JSX.Element;
declare namespace ShoppingCart {
    namespace propTypes {
        let cart: any;
        let setting: any;
    }
}
export default ShoppingCart;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    cart {\n      totalQty\n      uuid\n      items {\n        cartItemId\n        thumbnail\n        qty\n        productName\n        productSku\n        variantOptions\n        productUrl\n        productPrice {\n          value\n          text\n        }\n        productPriceInclTax {\n          value\n          text\n        }\n        finalPrice {\n          value\n          text\n        }\n        finalPriceInclTax {\n          value\n          text\n        }\n        lineTotal {\n          value\n          text\n        }\n        lineTotal {\n          value\n          text\n        }\n        lineTotalInclTax {\n          value\n          text\n        }\n        lineTotalInclTax {\n          value\n          text\n        }\n        removeApi\n        updateQtyApi\n        errors\n      }\n    }\n    setting {\n      priceIncludingTax\n    }\n  }\n";
import React from 'react';
