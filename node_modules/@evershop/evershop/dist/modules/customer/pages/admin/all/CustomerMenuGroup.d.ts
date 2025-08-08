declare function CustomerMenuGroup({ customerGrid }: {
    customerGrid: any;
}): React.JSX.Element;
declare namespace CustomerMenuGroup {
    namespace propTypes {
        let customerGrid: any;
    }
}
export default CustomerMenuGroup;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    customerGrid: url(routeId:\"customerGrid\")\n  }\n";
import React from 'react';
