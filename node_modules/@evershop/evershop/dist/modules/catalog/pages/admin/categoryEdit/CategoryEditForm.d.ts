declare function CategoryEditForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace CategoryEditForm {
    namespace propTypes {
        let action: any;
    }
}
export default CategoryEditForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"updateCategory\", params: [{key: \"id\", value: getContextValue(\"categoryUuid\")}]),\n    gridUrl: url(routeId: \"categoryGrid\")\n  }\n";
import React from 'react';
