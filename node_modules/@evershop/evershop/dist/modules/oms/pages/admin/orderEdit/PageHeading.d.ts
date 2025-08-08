declare function OrderEditPageHeading({ backUrl, order }: {
    backUrl: any;
    order: any;
}): React.JSX.Element;
declare namespace OrderEditPageHeading {
    namespace propTypes {
        let backUrl: any;
        let order: any;
    }
}
export default OrderEditPageHeading;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\", null)) {\n      orderNumber\n    }\n    backUrl: url(routeId: \"orderGrid\")\n  }\n";
import React from 'react';
