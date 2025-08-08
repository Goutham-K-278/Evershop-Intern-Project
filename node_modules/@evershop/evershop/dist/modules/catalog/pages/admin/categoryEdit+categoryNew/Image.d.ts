declare function Image({ category, imageUploadUrl }: {
    category: any;
    imageUploadUrl: any;
}): React.JSX.Element;
declare namespace Image {
    namespace propTypes {
        let category: any;
        let imageUploadUrl: any;
    }
    namespace defaultProps {
        let category_1: undefined;
        export { category_1 as category };
    }
}
export default Image;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    category(id: getContextValue(\"categoryId\", null)) {\n      image {\n        url\n      }\n    }\n    imageUploadUrl: url(routeId: \"imageUpload\", params: [{key: \"0\", value: \"\"}])\n  }\n";
import React from 'react';
