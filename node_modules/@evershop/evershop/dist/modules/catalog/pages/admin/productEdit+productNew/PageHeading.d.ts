declare function ProductEditPageHeading({ backUrl, product }: {
    backUrl: any;
    product: any;
}): React.JSX.Element;
declare namespace ProductEditPageHeading {
    namespace propTypes {
        let backUrl: any;
        let product: any;
    }
    namespace defaultProps {
        let product_1: null;
        export { product_1 as product };
    }
}
export default ProductEditPageHeading;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product(id: getContextValue(\"productId\", null)) {\n      name\n    }\n    backUrl: url(routeId: \"productGrid\")\n  }\n";
import React from 'react';
