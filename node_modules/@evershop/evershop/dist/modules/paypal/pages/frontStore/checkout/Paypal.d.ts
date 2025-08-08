export function Paypal({ createOrderAPI, orderId, orderPlaced }: {
    createOrderAPI: any;
    orderId: any;
    orderPlaced: any;
}): React.JSX.Element;
export namespace Paypal {
    namespace propTypes {
        let createOrderAPI: any;
        let orderId: any;
        let orderPlaced: any;
    }
    namespace defaultProps {
        let orderId_1: undefined;
        export { orderId_1 as orderId };
    }
}
declare function PaypalMethod({ createOrderAPI }: {
    createOrderAPI: any;
}): React.JSX.Element;
declare namespace PaypalMethod {
    export namespace propTypes_1 {
        let createOrderAPI_1: any;
        export { createOrderAPI_1 as createOrderAPI };
    }
    export { propTypes_1 as propTypes };
}
export default PaypalMethod;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    createOrderAPI: url(routeId: \"paypalCreateOrder\")\n  }\n";
import React from 'react';
