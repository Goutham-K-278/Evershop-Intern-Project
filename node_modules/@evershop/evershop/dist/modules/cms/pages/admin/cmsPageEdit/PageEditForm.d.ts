declare function CmsPageEditForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace CmsPageEditForm {
    namespace propTypes {
        let action: any;
    }
}
export default CmsPageEditForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"updateCmsPage\", params: [{key: \"id\", value: getContextValue(\"cmsPageUuid\")}]),\n    gridUrl: url(routeId: \"cmsPageGrid\")\n  }\n";
import React from 'react';
