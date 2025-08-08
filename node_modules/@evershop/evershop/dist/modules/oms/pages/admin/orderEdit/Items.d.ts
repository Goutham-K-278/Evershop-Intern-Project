declare function Items({ order: { items, shipmentStatus } }: {
    order: {
        items: any;
        shipmentStatus: any;
    };
}): React.JSX.Element;
declare namespace Items {
    namespace propTypes {
        let order: any;
    }
}
export default Items;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      currency\n      shipment {\n        shipmentId\n        carrier\n        trackingNumber\n        updateShipmentApi\n      }\n      shipmentStatus {\n        code\n        badge\n        progress\n        name\n      }\n      items {\n        id: orderItemId\n        qty\n        productName\n        productSku\n        productUrl\n        thumbnail\n        variantOptions\n        productPrice {\n          value\n          text\n        }\n        finalPrice {\n          value\n          text\n        }\n        total {\n          value\n          text\n        }\n        lineTotal {\n          value\n          text\n        }\n      }\n      createShipmentApi\n    },\n    carriers {\n      label: name\n      value: code\n    }\n  }\n";
import React from 'react';
