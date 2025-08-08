declare function TrackingButton({ order: { shipment }, carriers }: {
    order: {
        shipment: any;
    };
    carriers: any;
}): React.JSX.Element | null;
declare namespace TrackingButton {
    namespace propTypes {
        let order: any;
        let carriers: any;
    }
}
export default TrackingButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      shipment {\n        shipmentId\n        carrier\n        trackingNumber\n        updateShipmentApi\n      }\n      createShipmentApi\n    },\n    carriers {\n      name\n      code\n      trackingUrl\n    }\n  }\n";
import React from 'react';
