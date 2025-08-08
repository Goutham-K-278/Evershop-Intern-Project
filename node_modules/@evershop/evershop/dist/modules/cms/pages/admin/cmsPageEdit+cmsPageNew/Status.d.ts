declare function Status({ cmsPage }: {
    cmsPage: any;
}): React.JSX.Element;
declare namespace Status {
    namespace propTypes {
        let cmsPage: any;
    }
    namespace defaultProps {
        let cmsPage_1: null;
        export { cmsPage_1 as cmsPage };
    }
}
export default Status;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    cmsPage(id: getContextValue(\"cmsPageId\", null)) {\n      status\n    }\n  }\n";
import React from 'react';
