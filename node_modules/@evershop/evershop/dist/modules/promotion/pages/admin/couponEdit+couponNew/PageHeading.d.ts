declare function CouponEditPageHeading({ backUrl, coupon }: {
    backUrl: any;
    coupon: any;
}): React.JSX.Element;
declare namespace CouponEditPageHeading {
    namespace propTypes {
        let backUrl: any;
        let coupon: any;
    }
    namespace defaultProps {
        let coupon_1: null;
        export { coupon_1 as coupon };
    }
}
export default CouponEditPageHeading;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    coupon(id: getContextValue(\"couponId\", null)) {\n      coupon\n    }\n    backUrl: url(routeId: \"couponGrid\")\n  }\n";
import React from 'react';
