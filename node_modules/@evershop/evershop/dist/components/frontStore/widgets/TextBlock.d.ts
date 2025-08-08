declare function TextBlock({ textWidget: { text, className } }: {
    textWidget: {
        text: any;
        className: any;
    };
}): React.JSX.Element;
declare namespace TextBlock {
    namespace propTypes {
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
export default TextBlock;
export const query: "\n  query Query($text: String, $className: String) {\n    textWidget(text: $text, className: $className) {\n      ...TextBlockWidget\n    }\n  }\n";
export const fragments: "\n  fragment TextBlockWidget on TextBlockWidget {\n    text\n    className\n  }\n";
export const variables: "{\n  text: getWidgetSetting(\"text\"),\n  className: getWidgetSetting(\"className\")\n}";
import React from 'react';
