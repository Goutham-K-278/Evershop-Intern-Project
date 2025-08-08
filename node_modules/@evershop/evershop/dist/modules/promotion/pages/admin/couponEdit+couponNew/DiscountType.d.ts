declare function DiscountType({ coupon }: {
    coupon?: {} | undefined;
}): React.JSX.Element;
declare namespace DiscountType {
    namespace propTypes {
        let coupon: any;
    }
    namespace defaultProps {
        let coupon_1: {};
        export { coupon_1 as coupon };
    }
}
export default DiscountType;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    coupon(id: getContextValue('couponId', null)) {\n      discountType\n      targetProducts {\n        maxQty\n        products {\n          key\n          operator\n          value\n          qty\n        }\n      }\n      buyxGety {\n        sku\n        buyQty\n        getQty\n        maxY\n        discount\n      }\n    }\n  }\n";
import React from 'react';
