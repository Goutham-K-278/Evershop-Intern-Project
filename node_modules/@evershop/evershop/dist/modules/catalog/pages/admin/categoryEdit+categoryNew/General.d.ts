declare function General({ category, browserApi, deleteApi, uploadApi, folderCreateApi }: {
    category: any;
    browserApi: any;
    deleteApi: any;
    uploadApi: any;
    folderCreateApi: any;
}): React.JSX.Element;
declare namespace General {
    namespace propTypes {
        let browserApi: any;
        let deleteApi: any;
        let folderCreateApi: any;
        let uploadApi: any;
        let category: any;
    }
    namespace defaultProps {
        let category_1: {};
        export { category_1 as category };
    }
}
export default General;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    category(id: getContextValue(\"categoryId\", null)) {\n      categoryId\n      name\n      description\n      status\n      parent {\n        categoryId\n        name\n        path {\n          name\n        }\n      }\n    }\n    browserApi: url(routeId: \"fileBrowser\", params: [{key: \"0\", value: \"\"}])\n    deleteApi: url(routeId: \"fileDelete\", params: [{key: \"0\", value: \"\"}])\n    uploadApi: url(routeId: \"imageUpload\", params: [{key: \"0\", value: \"\"}])\n    folderCreateApi: url(routeId: \"folderCreate\")\n  }\n";
import React from 'react';
