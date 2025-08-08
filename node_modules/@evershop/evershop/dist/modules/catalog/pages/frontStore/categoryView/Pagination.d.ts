declare function PaginationWrapper({ products: { showProducts, products: { total, currentFilters } } }: {
    products: {
        showProducts: any;
        products: {
            total: any;
            currentFilters: any;
        };
    };
}): React.JSX.Element | null;
declare namespace PaginationWrapper {
    namespace propTypes {
        let products: any;
    }
}
export default PaginationWrapper;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    products: category(id: getContextValue('categoryId')) {\n      showProducts\n      products(filters: $filters) {\n        total\n        currentFilters {\n          key\n          operation\n          value\n        }\n      }\n    }\n  }";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
