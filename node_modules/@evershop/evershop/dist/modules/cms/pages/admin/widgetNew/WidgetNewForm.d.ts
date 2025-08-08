declare function WidgetNewForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace WidgetNewForm {
    namespace propTypes {
        let action: any;
    }
}
export default WidgetNewForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"createWidget\")\n    gridUrl: url(routeId: \"widgetGrid\")\n  }\n";
import React from 'react';
