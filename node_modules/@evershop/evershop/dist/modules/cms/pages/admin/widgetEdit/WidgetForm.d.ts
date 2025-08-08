declare function WidgetForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace WidgetForm {
    namespace propTypes {
        let action: any;
    }
}
export default WidgetForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"updateWidget\", params: [{key: \"id\", value: getContextValue(\"widgetUuid\")}]),\n    gridUrl: url(routeId: \"widgetGrid\")\n  }\n";
import React from 'react';
