declare function CmsPageNewForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace CmsPageNewForm {
    namespace propTypes {
        let action: any;
    }
}
export default CmsPageNewForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"createCmsPage\")\n    gridUrl: url(routeId: \"cmsPageGrid\")\n  }\n";
import React from 'react';
