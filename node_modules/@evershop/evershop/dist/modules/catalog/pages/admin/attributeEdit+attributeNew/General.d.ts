declare function General({ attribute, createGroupApi }: {
    attribute: any;
    createGroupApi: any;
}): React.JSX.Element;
declare namespace General {
    namespace propTypes {
        let attribute: any;
        let createGroupApi: any;
    }
    namespace defaultProps {
        export namespace attribute_1 {
            let type: string;
        }
        export { attribute_1 as attribute };
    }
}
export default General;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    attribute(id: getContextValue(\"attributeId\", null)) {\n      attributeId\n      attributeName\n      attributeCode\n      type\n      options {\n        optionId: attributeOptionId\n        uuid\n        optionText\n      }\n      groups {\n        items {\n          value: attributeGroupId\n          label: groupName\n        }\n      }\n    }\n    createGroupApi: url(routeId: \"createAttributeGroup\")\n  }\n";
import React from 'react';
