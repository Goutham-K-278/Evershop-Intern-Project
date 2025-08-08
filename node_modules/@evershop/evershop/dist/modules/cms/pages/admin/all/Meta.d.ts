declare function SeoMeta({ pageInfo: { title, description } }: {
    pageInfo: {
        title: any;
        description: any;
    };
}): React.JSX.Element;
declare namespace SeoMeta {
    namespace propTypes {
        let pageInfo: any;
    }
}
export default SeoMeta;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query query {\n    pageInfo {\n      title\n      description\n    }\n  }\n";
import React from 'react';
