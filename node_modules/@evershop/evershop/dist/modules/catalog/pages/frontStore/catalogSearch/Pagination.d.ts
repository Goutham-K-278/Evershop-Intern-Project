declare function PaginationWrapper({ products: { total, currentFilters } }: {
    products: {
        total: any;
        currentFilters: any;
    };
}): React.JSX.Element;
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
export const query: "\n  query Query($filtersFromUrl: [FilterInput]) {\n    products(filters: $filtersFromUrl) {\n        total\n        currentFilters {\n          key\n          operation\n          value\n        }\n      }\n  }";
export const variables: "{\n  filtersFromUrl: getContextValue(\"filtersFromUrl\")\n}";
import React from 'react';
