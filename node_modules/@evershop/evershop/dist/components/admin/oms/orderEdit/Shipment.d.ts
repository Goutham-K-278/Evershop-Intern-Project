declare function Shipment({ order: { orderId, shippingNote, shippingMethod, shippingMethodName, shipmentStatus, totalWeight, grandTotal }, startShipUrl, completeShipUrl }: {
    order: {
        orderId: any;
        shippingNote: any;
        shippingMethod: any;
        shippingMethodName: any;
        shipmentStatus: any;
        totalWeight: any;
        grandTotal: any;
    };
    startShipUrl: any;
    completeShipUrl: any;
}): React.JSX.Element;
declare namespace Shipment {
    namespace propTypes {
        let completeShipUrl: any;
        let startShipUrl: any;
        let order: any;
    }
}
export default Shipment;
export const layout: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      orderId\n      shippingNote\n      shippingMethod\n      shippingMethodName\n      shipmentStatus\n      totalWeight\n      grandTotal {\n        value\n        text\n      }\n    }\n    shipmentStatusList\n    startShipUrl: url(routeId: )\n    completeShipUrl\n  }\n";
import React from 'react';
