declare function OmsMenuGroup({ orderGrid }: {
    orderGrid: any;
}): React.JSX.Element;
declare namespace OmsMenuGroup {
    namespace propTypes {
        let orderGrid: any;
    }
}
export default OmsMenuGroup;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    orderGrid: url(routeId:\"orderGrid\")\n  }\n";
import React from 'react';
