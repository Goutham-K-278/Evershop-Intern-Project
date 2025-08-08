declare function Media({ id, product, productImageUploadUrl }: {
    id: any;
    product: any;
    productImageUploadUrl: any;
}): React.JSX.Element;
declare namespace Media {
    namespace propTypes {
        let id: any;
        let product: any;
        let productImageUploadUrl: any;
    }
    namespace defaultProps {
        let id_1: string;
        export { id_1 as id };
        let product_1: null;
        export { product_1 as product };
    }
}
export default Media;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product(id: getContextValue(\"productId\", null)) {\n      image {\n        id: uuid\n        url\n      }\n      gallery {\n        id: uuid\n        url\n      }\n    }\n    productImageUploadUrl: url(routeId: \"imageUpload\", params: [{key: \"0\", value: \"\"}])\n  }\n";
import React from 'react';
