declare function LoginForm({ action, homeUrl, registerUrl, forgotPasswordUrl }: {
    action: any;
    homeUrl: any;
    registerUrl: any;
    forgotPasswordUrl: any;
}): React.JSX.Element;
declare namespace LoginForm {
    namespace propTypes {
        let action: any;
        let homeUrl: any;
        let registerUrl: any;
        let forgotPasswordUrl: any;
    }
}
export default LoginForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    homeUrl: url(routeId: \"homepage\")\n    action: url(routeId: \"customerLoginJson\")\n    registerUrl: url(routeId: \"register\")\n    forgotPasswordUrl: url(routeId: \"resetPasswordPage\")\n  }\n";
import React from 'react';
