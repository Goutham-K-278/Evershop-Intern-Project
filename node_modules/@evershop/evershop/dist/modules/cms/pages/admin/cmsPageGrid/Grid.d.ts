declare function CMSPageGrid({ cmsPages: { items: pages, total, currentFilters } }: {
    cmsPages: {
        items: any;
        total: any;
        currentFilters?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace CMSPageGrid {
    namespace propTypes {
        let cmsPages: any;
    }
}
export default CMSPageGrid;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    cmsPages (filters: $filters) {\n      items {\n        cmsPageId\n        uuid\n        name\n        status\n        content\n        editUrl\n        updateApi\n        deleteApi\n      }\n      total\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
