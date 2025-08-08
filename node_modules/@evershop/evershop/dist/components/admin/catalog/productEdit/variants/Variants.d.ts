export function Variants({ productId, productUuid, variantGroup, variantAttributes, createProductApi, addVariantItemApi, productImageUploadUrl }: {
    productId: any;
    productUuid: any;
    variantGroup: any;
    variantAttributes: any;
    createProductApi: any;
    addVariantItemApi: any;
    productImageUploadUrl: any;
}): React.JSX.Element;
export namespace Variants {
    namespace propTypes {
        let variantAttributes: any;
        let productId: any;
        let productUuid: any;
        let variantGroup: any;
        let createProductApi: any;
        let addVariantItemApi: any;
        let productImageUploadUrl: any;
    }
    namespace defaultProps {
        let variantGroup_1: null;
        export { variantGroup_1 as variantGroup };
    }
}
export const VariantQuery: "\nquery Query($productId: ID!) {\n  product(id: $productId) {\n    variantGroup {\n      items {\n        id\n        attributes {\n          attributeId\n          attributeCode\n          optionId\n          optionText\n        }\n        product {\n          productId\n          uuid\n          name\n          sku\n          status\n          visibility\n          price {\n            regular {\n              value\n              currency\n              text\n            }\n          }\n          inventory {\n            qty\n            isInStock\n            stockAvailability\n            manageStock\n          }\n          editUrl\n          updateApi\n          image {\n            uuid\n            url\n          }\n          gallery {\n            uuid\n            url\n          }\n        }\n      }\n    }\n  }\n}\n";
import React from 'react';
