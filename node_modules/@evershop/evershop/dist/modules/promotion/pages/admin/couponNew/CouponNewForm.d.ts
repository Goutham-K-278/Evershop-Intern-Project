declare function CouponNewForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace CouponNewForm {
    namespace propTypes {
        let action: any;
    }
}
export default CouponNewForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"createCoupon\")\n    gridUrl: url(routeId: \"couponGrid\")\n  }\n";
import React from 'react';
