declare function Setting({ type }: {
    type: any;
}): React.JSX.Element;
declare namespace Setting {
    namespace propTypes {
        let widget: any;
        let type: any;
    }
    namespace defaultProps {
        let widget_1: {};
        export { widget_1 as widget };
        let type_1: {};
        export { type_1 as type };
    }
}
export default Setting;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    widget: widget(id: getContextValue('widgetId', null)) {\n      name\n      status\n      area\n      route\n      settings\n    }\n    type: widgetType(code: getContextValue('type', null)) {\n      code\n      name\n    }\n  }\n";
import React from 'react';
