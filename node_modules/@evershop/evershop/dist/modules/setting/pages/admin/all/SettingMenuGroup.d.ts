declare function CmsMenuGroup({ storeSetting }: {
    storeSetting: any;
}): React.JSX.Element;
declare namespace CmsMenuGroup {
    namespace propTypes {
        let storeSetting: any;
    }
}
export default CmsMenuGroup;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    storeSetting: url(routeId:\"storeSetting\")\n  }\n";
import React from 'react';
