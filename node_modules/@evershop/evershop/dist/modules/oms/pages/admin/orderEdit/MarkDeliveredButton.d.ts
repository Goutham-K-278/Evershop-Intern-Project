declare function MarkDeliveredButton({ order: { orderId, shipmentStatus: { code }, shipment }, markDeliveredApi }: {
    order: {
        orderId: any;
        shipmentStatus: {
            code: any;
        };
        shipment: any;
    };
    markDeliveredApi: any;
}): React.JSX.Element | null;
declare namespace MarkDeliveredButton {
    namespace propTypes {
        let order: any;
        let markDeliveredApi: any;
    }
}
export default MarkDeliveredButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      orderId\n      shipmentStatus {\n        code\n      }\n      shipment {\n        shipmentId\n      }\n    },\n    markDeliveredApi: url(routeId: \"markDelivered\")\n  }\n";
import React from 'react';
