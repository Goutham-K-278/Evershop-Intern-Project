declare function CouponEditForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace CouponEditForm {
    namespace propTypes {
        let action: any;
    }
}
export default CouponEditForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"updateCoupon\", params: [{key: \"id\", value: getContextValue(\"couponUuid\")}]),\n    gridUrl: url(routeId: \"couponGrid\")\n  }\n";
import React from 'react';
