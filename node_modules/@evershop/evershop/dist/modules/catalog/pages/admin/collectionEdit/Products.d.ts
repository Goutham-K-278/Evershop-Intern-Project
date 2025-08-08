declare function Products({ collection: { code, addProductApi } }: {
    collection: {
        code: any;
        addProductApi: any;
    };
}): React.JSX.Element | null;
declare namespace Products {
    namespace propTypes {
        let collection: any;
    }
}
export default Products;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    collection(code: getContextValue(\"collectionCode\", null)) {\n      collectionId\n      code\n      addProductApi: addProductUrl\n    }\n  }\n";
import React from 'react';
