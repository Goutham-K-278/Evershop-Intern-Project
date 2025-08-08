declare function ProductGrid({ products: { items: products, total, currentFilters } }: {
    products: {
        items: any;
        total: any;
        currentFilters?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace ProductGrid {
    namespace propTypes {
        let products: any;
    }
}
export default ProductGrid;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    products (filters: $filters) {\n      items {\n        productId\n        uuid\n        name\n        image {\n          thumb\n        }\n        sku\n        status\n        inventory {\n          qty\n        }\n        price {\n          regular {\n            value\n            text\n          }\n        }\n        editUrl\n        updateApi\n        deleteApi\n      }\n      total\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n    newProductUrl: url(routeId: \"productNew\")\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
