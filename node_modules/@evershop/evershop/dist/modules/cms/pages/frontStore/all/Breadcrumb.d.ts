export const query: "\n  query query {\n    pageInfo {\n      breadcrumbs {\n        title\n        url\n      }\n    }\n  }\n";
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export default Breadcrumb;
declare function Breadcrumb({ pageInfo: { breadcrumbs } }: {
    pageInfo: {
        breadcrumbs: any;
    };
}): React.JSX.Element | null;
declare namespace Breadcrumb {
    namespace propTypes {
        let pageInfo: any;
    }
}
import React from 'react';
