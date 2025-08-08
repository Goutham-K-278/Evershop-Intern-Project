declare function UpdatePasswordForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace UpdatePasswordForm {
    namespace propTypes {
        let action: any;
    }
}
export default UpdatePasswordForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"updatePassword\")\n  }\n";
import React from 'react';
