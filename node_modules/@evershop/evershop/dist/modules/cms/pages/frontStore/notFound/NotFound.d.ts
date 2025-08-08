declare function NotFound({ continueShoppingUrl }: {
    continueShoppingUrl: any;
}): React.JSX.Element;
declare namespace NotFound {
    namespace propTypes {
        let continueShoppingUrl: any;
    }
}
export default NotFound;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    continueShoppingUrl: url(routeId: \"homepage\")\n  }\n";
import React from 'react';
