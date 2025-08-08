declare function RegisterForm({ action, homeUrl, loginApi, loginUrl }: {
    action: any;
    homeUrl: any;
    loginApi: any;
    loginUrl: any;
}): React.JSX.Element;
declare namespace RegisterForm {
    namespace propTypes {
        let action: any;
        let homeUrl: any;
        let loginApi: any;
        let loginUrl: any;
    }
}
export default RegisterForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    homeUrl: url(routeId: \"homepage\")\n    action: url(routeId: \"createCustomer\")\n    loginApi: url(routeId: \"customerLoginJson\")\n    loginUrl: url(routeId: \"login\")\n  }\n";
import React from 'react';
