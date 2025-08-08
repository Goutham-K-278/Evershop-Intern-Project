declare function CategoryView({ category }: {
    category: any;
}): React.JSX.Element | null;
declare namespace CategoryView {
    namespace propTypes {
        let category: any;
    }
}
export default CategoryView;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    category(id: getContextValue('categoryId')) {\n      showProducts\n    }\n}";
import React from 'react';
