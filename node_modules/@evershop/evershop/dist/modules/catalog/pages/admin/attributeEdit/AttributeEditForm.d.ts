declare function AttributeEditForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace AttributeEditForm {
    namespace propTypes {
        let action: any;
    }
}
export default AttributeEditForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"updateAttribute\", params: [{key: \"id\", value: getContextValue(\"attributeUuid\")}]),\n    gridUrl: url(routeId: \"attributeGrid\")\n  }\n";
import React from 'react';
