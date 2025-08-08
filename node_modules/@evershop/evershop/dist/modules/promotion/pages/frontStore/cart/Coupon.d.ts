declare function CouponForm({ cart: { applyCouponApi } }: {
    cart: {
        applyCouponApi: any;
    };
}): React.JSX.Element;
declare namespace CouponForm {
    namespace propTypes {
        let cart: any;
    }
}
export default CouponForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    cart {\n      applyCouponApi\n    }\n  }\n";
import React from 'react';
