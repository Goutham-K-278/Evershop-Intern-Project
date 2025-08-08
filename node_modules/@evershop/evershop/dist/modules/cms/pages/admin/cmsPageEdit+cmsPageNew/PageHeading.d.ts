declare function PageEditPageHeading({ backUrl, page }: {
    backUrl: any;
    page: any;
}): React.JSX.Element;
declare namespace PageEditPageHeading {
    namespace propTypes {
        let backUrl: any;
        let page: any;
    }
    namespace defaultProps {
        let page_1: null;
        export { page_1 as page };
    }
}
export default PageEditPageHeading;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    page: cmsPage(id: getContextValue(\"cmsPageId\", null)) {\n      name\n    }\n    backUrl: url(routeId: \"cmsPageGrid\")\n  }\n";
import React from 'react';
