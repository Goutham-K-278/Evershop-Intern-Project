export const query: "\n  query Query {\n    product (id: getContextValue('productId')) {\n      attributes: attributeIndex {\n        attributeName\n        attributeCode\n        optionText\n      }\n    }\n  }\n";
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export default Attributes;
declare function Attributes({ product: { attributes } }: {
    product: {
        attributes: any;
    };
}): React.JSX.Element | null;
declare namespace Attributes {
    namespace propTypes {
        let product: any;
    }
}
import React from 'react';
