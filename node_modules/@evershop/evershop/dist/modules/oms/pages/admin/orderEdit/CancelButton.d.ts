declare function CancelButton({ order: { cancelApi, paymentStatus, shipmentStatus } }: {
    order: {
        cancelApi: any;
        paymentStatus: any;
        shipmentStatus: any;
    };
}): React.JSX.Element;
declare namespace CancelButton {
    namespace propTypes {
        let order: any;
    }
}
export default CancelButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      paymentStatus {\n        code\n        isCancelable\n      }\n      shipmentStatus {\n        code\n        isCancelable\n      }\n      cancelApi\n    }\n  }\n";
import React from 'react';
