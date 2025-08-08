declare function NewProductQuickLink({ couponNew }: {
    couponNew: any;
}): React.JSX.Element;
declare namespace NewProductQuickLink {
    namespace propTypes {
        let couponNew: any;
    }
}
export default NewProductQuickLink;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    couponNew: url(routeId:\"couponNew\")\n  }\n";
import React from 'react';
