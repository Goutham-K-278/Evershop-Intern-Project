declare function General({ coupon }: {
    coupon?: {} | undefined;
}): React.JSX.Element;
declare namespace General {
    namespace propTypes {
        let coupon: any;
    }
    namespace defaultProps {
        let coupon_1: {};
        export { coupon_1 as coupon };
    }
}
export default General;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    coupon(id: getContextValue('couponId', null)) {\n      coupon\n      status\n      description\n      discountAmount\n      freeShipping\n      startDate {\n        text\n      }\n      endDate {\n        text\n      }\n    }\n  }\n";
import React from 'react';
