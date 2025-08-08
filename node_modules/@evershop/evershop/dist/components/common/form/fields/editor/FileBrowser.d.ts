export default FileBrowser;
declare function FileBrowser({ onInsert, isMultiple, setFileBrowser, browserApi, deleteApi, uploadApi, folderCreateApi }: {
    onInsert: any;
    isMultiple: any;
    setFileBrowser: any;
    browserApi: any;
    deleteApi: any;
    uploadApi: any;
    folderCreateApi: any;
}): React.JSX.Element;
declare namespace FileBrowser {
    namespace propTypes {
        let browserApi: any;
        let deleteApi: any;
        let folderCreateApi: any;
        let setFileBrowser: any;
        let uploadApi: any;
        let onInsert: any;
        let isMultiple: any;
    }
    namespace defaultProps {
        let isMultiple_1: boolean;
        export { isMultiple_1 as isMultiple };
    }
}
import React from 'react';
