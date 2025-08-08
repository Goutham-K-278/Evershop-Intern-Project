declare function ShippingMethods({ getMethodsAPI, cart: { addShippingMethodApi }, allowedCountries }: {
    getMethodsAPI: any;
    cart: {
        addShippingMethodApi: any;
    };
    allowedCountries: any;
}): React.JSX.Element;
declare namespace ShippingMethods {
    namespace propTypes {
        let getMethodsAPI: any;
        let cart: any;
        let allowedCountries: any;
    }
}
export default ShippingMethods;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    getMethodsAPI: url(routeId: \"getShippingMethods\", params: [{ key: \"cart_id\", value: getContextValue('cart_id') }])\n    cart {\n      addShippingMethodApi\n    }\n    allowedCountries  {\n      code\n      name\n      provinces {\n        name\n        code\n      }\n    }\n  }\n";
import React from 'react';
