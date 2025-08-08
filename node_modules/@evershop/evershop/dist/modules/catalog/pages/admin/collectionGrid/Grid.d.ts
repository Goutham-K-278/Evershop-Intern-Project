declare function CollectionGrid({ collections: { items: collections, total, currentFilters } }: {
    collections: {
        items: any;
        total: any;
        currentFilters?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace CollectionGrid {
    namespace propTypes {
        let collections: any;
    }
}
export default CollectionGrid;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    collections (filters: $filters) {\n      items {\n        collectionId\n        uuid\n        name\n        code\n        editUrl\n        deleteApi\n      }\n      total\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
