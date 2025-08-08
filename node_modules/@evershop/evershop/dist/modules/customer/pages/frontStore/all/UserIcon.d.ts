declare function UserIcon({ customer, accountUrl, loginUrl }: {
    customer: any;
    accountUrl: any;
    loginUrl: any;
}): React.JSX.Element;
declare namespace UserIcon {
    namespace propTypes {
        let accountUrl: any;
        let customer: any;
        let loginUrl: any;
    }
    namespace defaultProps {
        let accountUrl_1: null;
        export { accountUrl_1 as accountUrl };
        let customer_1: null;
        export { customer_1 as customer };
    }
}
export default UserIcon;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    customer: currentCustomer {\n      uuid\n      fullName\n      email\n    }\n    accountUrl: url(routeId: \"account\")\n    loginUrl: url(routeId: \"login\")\n  }\n";
import React from 'react';
