declare function GeneralInfo({ product }: {
    product: any;
}): React.JSX.Element;
declare namespace GeneralInfo {
    namespace propTypes {
        let product: any;
    }
}
export default GeneralInfo;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product (id: getContextValue('productId')) {\n      name\n      sku\n      price {\n        regular {\n          value\n          text\n        }\n        special {\n          value\n          text\n        }\n      }\n    }\n  }";
import React from 'react';
