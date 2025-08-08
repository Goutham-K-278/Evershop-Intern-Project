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
export const query: "\n  query Query {\n    customer: currentCustomer {\n      orders {\n        orderId\n        orderNumber\n        createdAt {\n          text\n        }\n        shipmentStatus {\n          name\n          code\n          badge\n        }\n        paymentStatus {\n          name\n          code\n          badge\n        }\n        grandTotal {\n          value\n          text\n        }\n        items {\n          productName\n          thumbnail\n          productPrice {\n            value\n            text\n          }\n          productSku\n          qty\n        }\n    }\n  }\n}\n";
import React from 'react';
