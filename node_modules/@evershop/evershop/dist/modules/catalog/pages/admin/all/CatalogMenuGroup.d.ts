declare function CatalogMenuGroup({ productGrid, categoryGrid, attributeGrid, collectionGrid }: {
    productGrid: any;
    categoryGrid: any;
    attributeGrid: any;
    collectionGrid: any;
}): React.JSX.Element;
declare namespace CatalogMenuGroup {
    namespace propTypes {
        let attributeGrid: any;
        let categoryGrid: any;
        let collectionGrid: any;
        let productGrid: any;
    }
}
export default CatalogMenuGroup;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    productGrid: url(routeId:\"productGrid\")\n    categoryGrid: url(routeId:\"categoryGrid\")\n    attributeGrid: url(routeId:\"attributeGrid\")\n    collectionGrid: url(routeId:\"collectionGrid\")\n  }\n";
import React from 'react';
