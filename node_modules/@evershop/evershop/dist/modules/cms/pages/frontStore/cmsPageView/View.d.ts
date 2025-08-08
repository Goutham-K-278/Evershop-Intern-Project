declare function Page({ page }: {
    page: any;
}): React.JSX.Element;
declare namespace Page {
    namespace propTypes {
        let page: any;
    }
}
export default Page;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    page: cmsPage(id: getContextValue(\"pageId\")) {\n      name\n      content\n    }\n  }\n";
import React from 'react';
