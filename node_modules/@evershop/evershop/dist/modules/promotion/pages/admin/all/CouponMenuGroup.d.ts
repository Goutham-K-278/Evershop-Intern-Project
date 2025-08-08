declare function CatalogMenuGroup({ couponGrid }: {
    couponGrid: any;
}): React.JSX.Element;
declare namespace CatalogMenuGroup {
    namespace propTypes {
        let couponGrid: any;
    }
}
export default CatalogMenuGroup;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    couponGrid: url(routeId:\"couponGrid\")\n  }\n";
import React from 'react';
