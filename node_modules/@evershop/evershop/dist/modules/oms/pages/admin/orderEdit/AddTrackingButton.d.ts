declare function AddTrackingButton({ order: { shipment }, carriers }: {
    order: {
        shipment: any;
    };
    carriers: any;
}): React.JSX.Element | null;
declare namespace AddTrackingButton {
    namespace propTypes {
        let order: any;
        let carriers: any;
    }
}
export default AddTrackingButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      shipment {\n        shipmentId\n        carrier\n        trackingNumber\n        updateShipmentApi\n      }\n      createShipmentApi\n    },\n    carriers {\n      text: name\n      value: code\n    }\n  }\n";
import React from 'react';
