declare function TextBlockSetting({ textWidget: { text, className }, browserApi, deleteApi, uploadApi, folderCreateApi }: {
    textWidget: {
        text: any;
        className: any;
    };
    browserApi: any;
    deleteApi: any;
    uploadApi: any;
    folderCreateApi: any;
}): React.JSX.Element;
declare namespace TextBlockSetting {
    namespace propTypes {
        let browserApi: any;
        let deleteApi: any;
        let uploadApi: any;
        let folderCreateApi: any;
        let textWidget: any;
    }
    namespace defaultProps {
        export namespace textWidget_1 {
            let text: never[];
            let className: string;
        }
        export { textWidget_1 as textWidget };
    }
}
export default TextBlockSetting;
export const query: "\n  query Query($text: String, $className: String) {\n    textWidget(text: $text, className: $className) {\n      text\n      className\n    }\n    browserApi: url(routeId: \"fileBrowser\", params: [{key: \"0\", value: \"\"}])\n    deleteApi: url(routeId: \"fileDelete\", params: [{key: \"0\", value: \"\"}])\n    uploadApi: url(routeId: \"imageUpload\", params: [{key: \"0\", value: \"\"}])\n    folderCreateApi: url(routeId: \"folderCreate\")\n  }\n";
export const variables: "{\n  text: getWidgetSetting(\"text\"),\n  className: getWidgetSetting(\"className\")\n}";
import React from 'react';
