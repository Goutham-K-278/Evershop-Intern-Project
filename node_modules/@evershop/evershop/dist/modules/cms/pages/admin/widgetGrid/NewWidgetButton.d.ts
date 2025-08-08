declare function NewWidgetButton({ widgetTypes }: {
    widgetTypes: any;
}): React.JSX.Element;
declare namespace NewWidgetButton {
    namespace propTypes {
        let widgetTypes: any;
    }
}
export default NewWidgetButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    widgetTypes {\n      code\n      name\n      description\n      createWidgetUrl\n    }\n  }\n";
import React from 'react';
