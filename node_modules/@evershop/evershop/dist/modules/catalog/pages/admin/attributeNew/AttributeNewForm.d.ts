declare function AttributeNewForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace AttributeNewForm {
    namespace propTypes {
        let action: any;
    }
}
export default AttributeNewForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"createAttribute\")\n    gridUrl: url(routeId: \"attributeGrid\")\n  }\n";
import React from 'react';
