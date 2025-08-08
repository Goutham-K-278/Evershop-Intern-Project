declare function General({ widget, routes }: {
    widget: any;
    routes: any;
}): React.JSX.Element;
declare namespace General {
    namespace propTypes {
        let widget: any;
        let routes: any;
    }
    namespace defaultProps {
        let widget_1: null;
        export { widget_1 as widget };
    }
}
export default General;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    widget(id: getContextValue(\"widgetId\", null)) {\n      name\n      status\n      sortOrder\n      area\n      route\n    }\n    routes {\n      value: id\n      label: name\n      isApi\n      isAdmin\n      method\n    }\n  }\n";
import React from 'react';
