declare function Status({ product }: {
    product: any;
}): React.JSX.Element;
declare namespace Status {
    namespace propTypes {
        let product: any;
    }
    namespace defaultProps {
        export namespace product_1 {
            let status: number;
            let visibility: number;
        }
        export { product_1 as product };
    }
}
export default Status;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product(id: getContextValue(\"productId\", null)) {\n      status\n      visibility\n      category {\n        value: categoryId\n        label: name\n      }\n    }\n  }\n";
import React from 'react';
