declare function Products({ category: { categoryId, addProductApi } }: {
    category: {
        categoryId: any;
        addProductApi: any;
    };
}): React.JSX.Element | null;
declare namespace Products {
    namespace propTypes {
        let category: any;
    }
}
export default Products;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    category(id: getContextValue(\"categoryId\", null)) {\n      categoryId\n      addProductApi: addProductUrl\n    }\n  }\n";
import React from 'react';
