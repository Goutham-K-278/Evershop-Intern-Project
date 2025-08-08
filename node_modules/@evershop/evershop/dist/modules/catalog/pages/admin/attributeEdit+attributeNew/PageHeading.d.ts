declare function AttributeEditPageHeading({ backUrl, attribute }: {
    backUrl: any;
    attribute: any;
}): React.JSX.Element;
declare namespace AttributeEditPageHeading {
    namespace propTypes {
        let attribute: any;
        let backUrl: any;
    }
    namespace defaultProps {
        let attribute_1: {};
        export { attribute_1 as attribute };
    }
}
export default AttributeEditPageHeading;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    attribute(id: getContextValue(\"attributeId\", null)) {\n      attributeName\n    }\n    backUrl: url(routeId: \"attributeGrid\")\n  }\n";
import React from 'react';
