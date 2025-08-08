declare function NewCategoryButton({ newCateoryUrl }: {
    newCateoryUrl: any;
}): React.JSX.Element;
declare namespace NewCategoryButton {
    namespace propTypes {
        let newCateoryUrl: any;
    }
}
export default NewCategoryButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    newCateoryUrl: url(routeId: \"categoryNew\")\n  }\n";
import React from 'react';
