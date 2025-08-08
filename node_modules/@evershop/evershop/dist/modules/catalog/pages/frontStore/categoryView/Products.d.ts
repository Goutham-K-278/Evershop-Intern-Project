declare function Products({ products: { showProducts, products: { items } } }: {
    products: {
        showProducts: any;
        products: {
            items: any;
        };
    };
}): React.JSX.Element | null;
declare namespace Products {
    namespace propTypes {
        let products: any;
    }
    namespace defaultProps {
        export namespace products_1 {
            export let showProducts: number;
            export namespace products_2 {
                let items: never[];
            }
            export { products_2 as products };
        }
        export { products_1 as products };
    }
}
export default Products;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    products: category(id: getContextValue('categoryId')) {\n      showProducts\n      products(filters: $filters) {\n        items {\n          ...Product\n        }\n      }\n    }\n  }";
export const fragments: "\n  fragment Product on Product {\n    productId\n    name\n    sku\n    price {\n      regular {\n        value\n        text\n      }\n      special {\n        value\n        text\n      }\n    }\n    image {\n      alt\n      url: listing\n    }\n    url\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
