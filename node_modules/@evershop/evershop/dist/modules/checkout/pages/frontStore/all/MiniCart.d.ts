declare function MiniCart({ cartUrl, cart }: {
    cartUrl: any;
    cart: any;
}): React.JSX.Element;
declare namespace MiniCart {
    namespace propTypes {
        let cartUrl: any;
        let cart: any;
    }
    namespace defaultProps {
        let cart_1: null;
        export { cart_1 as cart };
    }
}
export default MiniCart;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    cartUrl: url(routeId: \"cart\"),\n    cart(id: getContextValue(\"cartId\", null)) {\n      totalQty\n    }\n  }\n";
import React from 'react';
