declare function CustomerInfo({ order: { orderNumber, customerFullName, customerEmail, paymentMethodName, shippingAddress, billingAddress } }: {
    order: {
        orderNumber: any;
        customerFullName: any;
        customerEmail: any;
        paymentMethodName: any;
        shippingAddress: any;
        billingAddress: any;
    };
}): React.JSX.Element;
declare namespace CustomerInfo {
    namespace propTypes {
        let order: any;
    }
}
export default CustomerInfo;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order (uuid: getContextValue('orderId')) {\n      orderNumber\n      customerFullName\n      customerEmail\n      paymentMethodName\n      shippingNote\n      shippingAddress {\n        fullName\n        postcode\n        telephone\n        country {\n          name\n          code\n        }\n        province {\n          name\n          code\n        }\n        city\n        address1\n        address2\n      }\n      billingAddress {\n        fullName\n        postcode\n        telephone\n        country {\n          name\n          code\n        }\n        province {\n          name\n          code\n        }\n        city\n        address1\n        address2\n      }\n    }\n  }\n";
import React from 'react';
