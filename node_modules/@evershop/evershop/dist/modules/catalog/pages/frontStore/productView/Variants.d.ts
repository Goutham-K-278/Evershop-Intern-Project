declare function Variants({ product: { variantGroup: vs }, pageInfo: { url: currentProductUrl } }: {
    product: {
        variantGroup: any;
    };
    pageInfo: {
        url: any;
    };
}): React.JSX.Element;
declare namespace Variants {
    namespace propTypes {
        let product: any;
        let pageInfo: any;
    }
}
export default Variants;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\nquery Query {\n  pageInfo {\n    url\n  }\n  product(id: getContextValue('productId')) {\n    variantGroup {\n      variantAttributes {\n        attributeId\n        attributeCode\n        attributeName\n        options {\n          optionId\n          optionText\n          productId\n        }\n      }\n      items {\n        attributes {\n          attributeCode\n          optionId\n        }\n      }\n    }\n  }\n}\n";
import React from 'react';
