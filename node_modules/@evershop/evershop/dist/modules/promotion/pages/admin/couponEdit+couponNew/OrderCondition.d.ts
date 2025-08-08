declare function OrderCondition({ coupon }: {
    coupon?: {} | undefined;
}): React.JSX.Element;
declare namespace OrderCondition {
    namespace propTypes {
        let coupon: any;
    }
    namespace defaultProps {
        let coupon_1: {};
        export { coupon_1 as coupon };
    }
}
export default OrderCondition;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    coupon(id: getContextValue('couponId', null)) {\n      condition {\n        orderTotal\n        orderQty\n        requiredProducts {\n          key\n          operator\n          value\n          qty\n        }\n      }\n    }\n  }\n";
import React from 'react';
