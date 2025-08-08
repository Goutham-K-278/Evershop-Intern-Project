declare function FormContent({ gridUrl, type }: {
    gridUrl: any;
    type: any;
}): React.JSX.Element;
declare namespace FormContent {
    namespace propTypes {
        let gridUrl: any;
        let type: any;
    }
}
export default FormContent;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    gridUrl: url(routeId: \"widgetGrid\")\n    type: widgetType(code: getContextValue('type')) {\n      code\n      description\n      settingComponent\n      defaultSetting\n    }\n  }\n";
import React from 'react';
