declare function CustomerGrid({ customers: { items: customers, total, currentFilters } }: {
    customers: {
        items: any;
        total: any;
        currentFilters?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace CustomerGrid {
    namespace propTypes {
        let customers: any;
    }
}
export default CustomerGrid;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    customers (filters: $filters) {\n      items {\n        customerId\n        uuid\n        fullName\n        email\n        status\n        createdAt {\n          value\n          text\n        }\n        editUrl\n        updateApi\n      }\n      total\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
