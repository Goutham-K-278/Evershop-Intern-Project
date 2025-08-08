declare function NewCouponButton({ newCouponUrl }: {
    newCouponUrl: any;
}): React.JSX.Element;
declare namespace NewCouponButton {
    namespace propTypes {
        let newCouponUrl: any;
    }
}
export default NewCouponButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    newCouponUrl: url(routeId: \"couponNew\")\n  }\n";
import React from 'react';
