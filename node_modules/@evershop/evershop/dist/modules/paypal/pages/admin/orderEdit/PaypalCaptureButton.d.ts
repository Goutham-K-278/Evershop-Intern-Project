declare function PaypalCaptureButton({ captureAPI, order: { paymentStatus, uuid, paymentMethod } }: {
    captureAPI: any;
    order: {
        paymentStatus: any;
        uuid: any;
        paymentMethod: any;
    };
}): React.JSX.Element;
declare namespace PaypalCaptureButton {
    namespace propTypes {
        let captureAPI: any;
        let order: any;
    }
}
export default PaypalCaptureButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    captureAPI: url(routeId: \"paypalCaptureAuthorizedPayment\")\n    order(uuid: getContextValue(\"orderId\")) {\n      uuid\n      paymentStatus {\n        code\n      }\n      paymentMethod\n    }\n  }\n";
import React from 'react';
