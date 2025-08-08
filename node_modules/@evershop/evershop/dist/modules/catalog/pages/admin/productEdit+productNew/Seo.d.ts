declare function SEO({ product }: {
    product: any;
}): React.JSX.Element;
declare namespace SEO {
    namespace propTypes {
        let product: any;
    }
    namespace defaultProps {
        export namespace product_1 {
            let urlKey: string;
            let metaTitle: string;
            let metaKeywords: string;
            let metaDescription: string;
        }
        export { product_1 as product };
    }
}
export default SEO;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product(id: getContextValue('productId', null)) {\n      urlKey\n      metaTitle\n      metaKeywords\n      metaDescription\n    }\n  }\n";
import React from 'react';
