declare function Products({ products: { items } }: {
    products: {
        items: any;
    };
}): React.JSX.Element;
declare namespace Products {
    namespace propTypes {
        let products: any;
    }
    namespace defaultProps {
        export namespace products_1 {
            let items: never[];
        }
        export { products_1 as products };
    }
}
export default Products;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filtersFromUrl: [FilterInput]) {\n    products(filters: $filtersFromUrl) {\n      items {\n        ...Product\n      }\n    }\n  }";
export const fragments: "\n  fragment Product on Product {\n    productId\n    name\n    sku\n    price {\n      regular {\n        value\n        text\n      }\n      special {\n        value\n        text\n      }\n    }\n    image {\n      alt\n      url: listing\n    }\n    url\n  }\n";
export const variables: "{\n  filtersFromUrl: getContextValue(\"filtersFromUrl\")\n}";
import React from 'react';
