declare function Description({ product: { description } }: {
    product: {
        description: any;
    };
}): React.JSX.Element;
declare namespace Description {
    namespace propTypes {
        let product: any;
    }
}
export default Description;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product (id: getContextValue('productId')) {\n      description\n    }\n  }";
import React from 'react';
