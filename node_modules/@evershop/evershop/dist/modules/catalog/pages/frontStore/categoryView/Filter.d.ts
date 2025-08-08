declare function Filter({ category: { products: { currentFilters }, availableAttributes, priceRange, children }, setting }: {
    category: {
        products: {
            currentFilters: any;
        };
        availableAttributes: any;
        priceRange: any;
        children: any;
    };
    setting: any;
}): React.JSX.Element;
declare namespace Filter {
    namespace propTypes {
        let category: any;
        let setting: any;
    }
}
export default Filter;
export const FilterDispatch: React.Context<any>;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\nquery Query($filters: [FilterInput]) {\n  category (id: getContextValue('categoryId')) {\n    products (filters: $filters) {\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n    availableAttributes {\n      attributeCode\n      attributeName\n      options {\n        optionId\n        optionText\n      }\n    }\n    priceRange {\n      min\n      max\n    }\n    children {\n      categoryId,\n      name\n      uuid\n    }\n  }\n  setting {\n    storeLanguage\n    storeCurrency\n  }\n}";
export function useFilterDispatch(): any;
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
