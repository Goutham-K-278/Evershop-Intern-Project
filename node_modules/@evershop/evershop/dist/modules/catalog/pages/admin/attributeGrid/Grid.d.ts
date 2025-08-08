declare function AttributeGrid({ attributes: { items: attributes, total, currentFilters } }: {
    attributes: {
        items: any;
        total: any;
        currentFilters?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace AttributeGrid {
    namespace propTypes {
        let attributes: any;
    }
}
export default AttributeGrid;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    attributes (filters: $filters) {\n      items {\n        attributeId\n        uuid\n        attributeName\n        attributeCode\n        type\n        isRequired\n        isFilterable\n        editUrl\n        updateApi\n        deleteApi\n        groups {\n          items {\n            attributeGroupId\n            groupName\n            updateApi\n          }\n        }\n      }\n      total\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
