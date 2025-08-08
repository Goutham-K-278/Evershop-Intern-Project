declare function OrderGrid({ orders: { items: orders, total, currentFilters }, paymentStatusList, shipmentStatusList }: {
    orders: {
        items: any;
        total: any;
        currentFilters?: never[] | undefined;
    };
    paymentStatusList: any;
    shipmentStatusList: any;
}): React.JSX.Element;
declare namespace OrderGrid {
    namespace propTypes {
        let orders: any;
        let paymentStatusList: any;
        let shipmentStatusList: any;
    }
}
export default OrderGrid;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    orders (filters: $filters) {\n      items {\n        orderId\n        uuid\n        orderNumber\n        createdAt {\n          value\n          text\n        }\n        customerEmail\n        shipmentStatus {\n          name\n          code\n          badge\n          progress\n        }\n        paymentStatus {\n          name\n          code\n          badge\n          progress\n        }\n        grandTotal {\n          value\n          text\n        }\n        editUrl\n        createShipmentApi\n      }\n      total\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n    paymentStatusList {\n      code\n      name\n    }\n    shipmentStatusList {\n      code\n      name\n    }\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
