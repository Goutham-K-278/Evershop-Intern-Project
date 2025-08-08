declare function CustomerEditPageHeading({ backUrl, customer }: {
    backUrl: any;
    customer: any;
}): React.JSX.Element;
declare namespace CustomerEditPageHeading {
    namespace propTypes {
        let backUrl: any;
        let customer: any;
    }
    namespace defaultProps {
        let customer_1: null;
        export { customer_1 as customer };
    }
}
export default CustomerEditPageHeading;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    customer(id: getContextValue(\"customerUuid\", null)) {\n      fullName\n    }\n    backUrl: url(routeId: \"customerGrid\")\n  }\n";
import React from 'react';
