declare function CategoryEditPageHeading({ backUrl, category }: {
    backUrl: any;
    category: any;
}): React.JSX.Element;
declare namespace CategoryEditPageHeading {
    namespace propTypes {
        let backUrl: any;
        let category: any;
    }
    namespace defaultProps {
        let category_1: {};
        export { category_1 as category };
    }
}
export default CategoryEditPageHeading;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    category(id: getContextValue(\"categoryId\", null)) {\n      name\n    }\n    backUrl: url(routeId: \"categoryGrid\")\n  }\n";
import React from 'react';
