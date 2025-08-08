declare function NewProductQuickLink({ productNew }: {
    productNew: any;
}): React.JSX.Element;
declare namespace NewProductQuickLink {
    namespace propTypes {
        let productNew: any;
    }
}
export default NewProductQuickLink;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    productNew: url(routeId:\"productNew\")\n  }\n";
import React from 'react';
