declare function Seo({ page }: {
    page: any;
}): React.JSX.Element;
declare namespace Seo {
    namespace propTypes {
        let page: any;
    }
    namespace defaultProps {
        let page_1: {};
        export { page_1 as page };
    }
}
export default Seo;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    page: cmsPage(id: getContextValue('cmsPageId', null)) {\n      urlKey\n      metaTitle\n      metaKeywords\n      metaDescription\n    }\n  }\n";
import React from 'react';
