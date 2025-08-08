declare function NewAttributeButton({ newAttributeUrl }: {
    newAttributeUrl: any;
}): React.JSX.Element;
declare namespace NewAttributeButton {
    namespace propTypes {
        let newAttributeUrl: any;
    }
}
export default NewAttributeButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    newAttributeUrl: url(routeId: \"attributeNew\")\n  }\n";
import React from 'react';
