declare function ShipButton({ order: { shipment, createShipmentApi, shipmentStatus }, carriers }: {
    order: {
        shipment: any;
        createShipmentApi: any;
        shipmentStatus: any;
    };
    carriers: any;
}): React.JSX.Element | null;
declare namespace ShipButton {
    namespace propTypes {
        let order: any;
        let carriers: any;
    }
}
export default ShipButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      shipment {\n        shipmentId\n        carrier\n        trackingNumber\n        updateShipmentApi\n      }\n      shipmentStatus {\n        code\n      }\n      createShipmentApi\n    },\n    carriers {\n      text: name\n      value: code\n    }\n  }\n";
import React from 'react';
