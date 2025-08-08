declare function General({ collection, browserApi, deleteApi, uploadApi, folderCreateApi }: {
    collection: any;
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
        let collection: any;
    }
    namespace defaultProps {
        let collection_1: {};
        export { collection_1 as collection };
    }
}
export default General;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    collection(code: getContextValue(\"collectionCode\", null)) {\n      collectionId\n      name\n      code\n      description\n    }\n    browserApi: url(routeId: \"fileBrowser\", params: [{key: \"0\", value: \"\"}])\n    deleteApi: url(routeId: \"fileDelete\", params: [{key: \"0\", value: \"\"}])\n    uploadApi: url(routeId: \"imageUpload\", params: [{key: \"0\", value: \"\"}])\n    folderCreateApi: url(routeId: \"folderCreate\")\n  }\n";
import React from 'react';
