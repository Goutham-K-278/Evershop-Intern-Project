declare function NotFound({ dashboardUrl }: {
    dashboardUrl: any;
}): React.JSX.Element;
declare namespace NotFound {
    namespace propTypes {
        let dashboardUrl: any;
    }
}
export default NotFound;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    dashboardUrl: url(routeId: \"dashboard\")\n  }\n";
import React from 'react';
