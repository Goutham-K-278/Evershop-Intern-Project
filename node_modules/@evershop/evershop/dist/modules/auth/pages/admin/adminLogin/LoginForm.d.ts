declare function LoginForm({ authUrl, dashboardUrl }: {
    authUrl: any;
    dashboardUrl: any;
}): React.JSX.Element;
declare namespace LoginForm {
    namespace propTypes {
        let authUrl: any;
        let dashboardUrl: any;
    }
}
export default LoginForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    authUrl: url(routeId: \"adminLoginJson\")\n    dashboardUrl: url(routeId: \"dashboard\")\n  }\n";
import React from 'react';
