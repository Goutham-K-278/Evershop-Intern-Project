declare function CategoryInfo({ category: { name, description, image } }: {
    category: {
        name: any;
        description: any;
        image: any;
    };
}): React.JSX.Element;
declare namespace CategoryInfo {
    namespace propTypes {
        let category: any;
    }
}
export default CategoryInfo;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    category(id: getContextValue('categoryId')) {\n      name\n      description\n      image {\n        alt\n        url\n      }\n    }\n}";
import React from 'react';
