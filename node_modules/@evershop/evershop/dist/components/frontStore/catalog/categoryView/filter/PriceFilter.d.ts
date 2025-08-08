export function PriceFilter({ priceRange: { min: minPrice, max: maxPrice }, currentFilters, updateFilter, setting: { storeLanguage: language, storeCurrency: currency } }: {
    priceRange: {
        min: any;
        max: any;
    };
    currentFilters: any;
    updateFilter: any;
    setting: {
        storeLanguage: any;
        storeCurrency: any;
    };
}): React.JSX.Element;
export namespace PriceFilter {
    namespace propTypes {
        let currentFilters: any;
        let priceRange: any;
        let setting: any;
        let updateFilter: any;
    }
}
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
import React from 'react';
