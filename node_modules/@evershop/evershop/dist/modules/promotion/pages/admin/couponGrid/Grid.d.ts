declare function CouponGrid({ coupons: { items: coupons, total, currentFilters } }: {
    coupons: {
        items: any;
        total: any;
        currentFilters?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace CouponGrid {
    namespace propTypes {
        let coupons: any;
    }
}
export default CouponGrid;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query($filters: [FilterInput]) {\n    coupons (filters: $filters) {\n      items {\n        couponId\n        uuid\n        coupon\n        status\n        usedTime\n        startDate {\n          text\n        }\n        endDate {\n          text\n        }\n        editUrl\n        updateApi\n        deleteApi\n      }\n      total\n      currentFilters {\n        key\n        operation\n        value\n      }\n    }\n  }\n";
export const variables: "\n{\n  filters: getContextValue('filtersFromUrl')\n}";
import React from 'react';
