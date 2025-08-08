declare function Customer({ order: { shippingAddress, billingAddress, customerFullName, customerEmail, customerUrl } }: {
    order: {
        shippingAddress: any;
        billingAddress: any;
        customerFullName: any;
        customerEmail: any;
        customerUrl: any;
    };
}): React.JSX.Element;
declare namespace Customer {
    namespace propTypes {
        let order: any;
    }
}
export default Customer;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      customerFullName\n      customerEmail\n      customerUrl\n      shippingAddress {\n        fullName\n        city\n        address1\n        address2\n        postcode\n        telephone\n        province {\n          code\n          name\n        }\n        country {\n          code\n          name\n        }\n      }\n      billingAddress {\n        fullName\n        city\n        address1\n        address2\n        postcode\n        telephone\n        province {\n          code\n          name\n        }\n        country {\n          code\n          name\n        }\n      }\n    }\n  }\n";
import React from 'react';
