declare function Editor({ name, value, label, browserApi, deleteApi, uploadApi, folderCreateApi }: {
    name: any;
    value?: never[] | undefined;
    label: any;
    browserApi: any;
    deleteApi: any;
    uploadApi: any;
    folderCreateApi: any;
}): React.JSX.Element;
declare namespace Editor {
    namespace propTypes {
        let label: any;
        let name: any;
        let value: any;
        let browserApi: any;
        let deleteApi: any;
        let uploadApi: any;
        let folderCreateApi: any;
    }
    namespace defaultProps {
        let value_1: never[];
        export { value_1 as value };
        let label_1: string;
        export { label_1 as label };
    }
}
export default Editor;
import React from 'react';
