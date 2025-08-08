declare function VariantGroup({ product, createVariantGroupApi, createProductApi, productImageUploadUrl }: {
    product: any;
    createVariantGroupApi: any;
    createProductApi: any;
    productImageUploadUrl: any;
}): React.JSX.Element;
declare namespace VariantGroup {
    namespace propTypes {
        let createProductApi: any;
        let createVariantGroupApi: any;
        let product: any;
        let productImageUploadUrl: any;
    }
}
export default VariantGroup;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\nquery Query {\n  product(id: getContextValue('productId', null)) {\n    productId\n    uuid\n    variantGroup {\n      variantGroupId\n      attributes: variantAttributes {\n        attributeId\n        attributeCode\n        attributeName\n        options {\n          optionId\n          optionText\n        }\n      }\n      addItemApi\n    }\n  }\n  createVariantGroupApi: url(routeId: \"createVariantGroup\")\n  createProductApi: url(routeId: \"createProduct\")\n  productImageUploadUrl: url(routeId: \"imageUpload\", params: [{key: \"0\", value: \"\"}])\n}\n";
import React from 'react';
