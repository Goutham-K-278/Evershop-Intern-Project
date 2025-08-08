declare function Collections({ product: { collections } }: {
    product: {
        collections: any;
    };
}): React.JSX.Element;
declare namespace Collections {
    namespace propTypes {
        let product: any;
    }
    namespace defaultProps {
        export namespace product_1 {
            let collections: never[];
        }
        export { product_1 as product };
    }
}
export default Collections;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product(id: getContextValue(\"productId\", null)) {\n      collections {\n        uuid\n        name\n        editUrl\n      }\n    }\n  }\n";
import React from 'react';
