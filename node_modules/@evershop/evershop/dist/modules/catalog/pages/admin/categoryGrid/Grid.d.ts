declare function CategoryGrid({ categories: { items: categories, total, currentFilters } }: {
    categories: {
        items: any;
        total: any;
        currentFilters?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace CategoryGrid {
    namespace propTypes {
        let categories: any;
    }
}
export default CategoryGrid;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    categories (filters: $filters) {\n      items {\n        categoryId\n        uuid\n        name\n        status\n        includeInNav\n        editUrl\n        deleteApi\n        path {\n          name\n        }\n      }\n      total\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
