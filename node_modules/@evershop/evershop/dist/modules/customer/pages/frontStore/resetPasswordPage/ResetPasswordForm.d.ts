declare function ResetPasswordForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace ResetPasswordForm {
    namespace propTypes {
        let action: any;
    }
}
export default ResetPasswordForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"resetPassword\")\n  }\n";
import React from 'react';
