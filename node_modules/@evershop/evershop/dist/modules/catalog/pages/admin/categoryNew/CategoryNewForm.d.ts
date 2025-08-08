declare function CategoryNewForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace CategoryNewForm {
    namespace propTypes {
        let action: any;
    }
}
export default CategoryNewForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"createCategory\")\n    gridUrl: url(routeId: \"categoryGrid\")\n  }\n";
import React from 'react';
