declare function General({ page, browserApi, deleteApi, uploadApi, folderCreateApi }: {
    page: any;
    browserApi: any;
    deleteApi: any;
    uploadApi: any;
    folderCreateApi: any;
}): React.JSX.Element;
declare namespace General {
    namespace propTypes {
        let page: any;
        let browserApi: any;
        let deleteApi: any;
        let folderCreateApi: any;
        let uploadApi: any;
    }
    namespace defaultProps {
        export namespace page_1 {
            let cmsPageId: null;
            let name: string;
            let content: string;
        }
        export { page_1 as page };
    }
}
export default General;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    page: cmsPage(id: getContextValue(\"cmsPageId\", null)) {\n      cmsPageId\n      name\n      content\n    }\n    browserApi: url(routeId: \"fileBrowser\", params: [{key: \"0\", value: \"\"}])\n    deleteApi: url(routeId: \"fileDelete\", params: [{key: \"0\", value: \"\"}])\n    uploadApi: url(routeId: \"imageUpload\", params: [{key: \"0\", value: \"\"}])\n    folderCreateApi: url(routeId: \"folderCreate\")\n  }\n";
import React from 'react';
