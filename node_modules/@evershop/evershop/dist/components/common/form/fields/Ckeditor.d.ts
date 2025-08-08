declare function CkeditorField({ name, value, label, browserApi, deleteApi, uploadApi, folderCreateApi }: {
    name: any;
    value: any;
    label: any;
    browserApi: any;
    deleteApi: any;
    uploadApi: any;
    folderCreateApi: any;
}): React.JSX.Element;
declare namespace CkeditorField {
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
        let label_1: string;
        export { label_1 as label };
    }
}
export default CkeditorField;
import React from 'react';
