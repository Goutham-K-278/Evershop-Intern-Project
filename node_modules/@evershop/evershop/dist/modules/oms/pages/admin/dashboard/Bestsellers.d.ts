declare function BestSellers({ bestSellers, listUrl }: {
    bestSellers: any;
    listUrl: any;
}): React.JSX.Element;
declare namespace BestSellers {
    namespace propTypes {
        let bestSellers: any;
        let listUrl: any;
    }
}
export default BestSellers;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    bestSellers {\n      name\n      price {\n        regular {\n          value\n          text\n        }\n      }\n      soldQty\n      image {\n        thumb\n      }\n      editUrl\n    }\n    listUrl: url(routeId: \"productGrid\")\n  }\n";
import React from 'react';
