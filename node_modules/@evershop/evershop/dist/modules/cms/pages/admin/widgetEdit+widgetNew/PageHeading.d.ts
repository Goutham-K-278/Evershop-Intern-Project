declare function WidgetEditPageHeading({ backUrl, widget }: {
    backUrl: any;
    widget: any;
}): React.JSX.Element;
declare namespace WidgetEditPageHeading {
    namespace propTypes {
        let backUrl: any;
        let widget: any;
    }
    namespace defaultProps {
        let widget_1: null;
        export { widget_1 as widget };
    }
}
export default WidgetEditPageHeading;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    page: widget(id: getContextValue(\"widgetId\", null)) {\n      name\n    }\n    backUrl: url(routeId: \"widgetGrid\")\n  }\n";
import React from 'react';
