declare function OrderHistory({ customer: { orders } }: {
    customer: {
        orders?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace OrderHistory {
    namespace propTypes {
        let customer: any;
    }
}
export default OrderHistory;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    customer(id: getContextValue(\"customerUuid\", null)) {\n      orders {\n        orderNumber\n        uuid\n        editUrl\n        createdAt {\n          text\n        }\n        shipmentStatus {\n          name\n        }\n        paymentStatus {\n          name\n        }\n        grandTotal {\n          text\n        }\n      }\n    }\n  }\n";
import React from 'react';
