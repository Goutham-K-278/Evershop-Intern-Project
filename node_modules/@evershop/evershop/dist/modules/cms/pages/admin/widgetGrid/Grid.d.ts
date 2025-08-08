declare function WidgetGrid({ widgets: { items, total, currentFilters }, widgetTypes }: {
    widgets: {
        items: any;
        total: any;
        currentFilters?: never[] | undefined;
    };
    widgetTypes: any;
}): React.JSX.Element;
declare namespace WidgetGrid {
    namespace propTypes {
        let widgets: any;
        let widgetTypes: any;
    }
}
export default WidgetGrid;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    widgets (filters: $filters) {\n      items {\n        widgetId\n        uuid\n        name\n        area\n        route\n        type\n        status\n        editUrl\n        updateApi\n        deleteApi\n      }\n      total\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n    widgetTypes {\n      code\n      name\n    }\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
