declare function CmsMenuGroup({ cmsPageGrid, widgetGrid }: {
    cmsPageGrid: any;
    widgetGrid: any;
}): React.JSX.Element;
declare namespace CmsMenuGroup {
    namespace propTypes {
        let cmsPageGrid: any;
        let widgetGrid: any;
    }
}
export default CmsMenuGroup;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    cmsPageGrid: url(routeId:\"cmsPageGrid\")\n    widgetGrid: url(routeId:\"widgetGrid\")\n  }\n";
import React from 'react';
