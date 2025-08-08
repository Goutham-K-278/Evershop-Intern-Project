declare function Attributes({ product, groups: { items } }: {
    product: any;
    groups: {
        items: any;
    };
}): React.JSX.Element;
declare namespace Attributes {
    namespace propTypes {
        let groups: any;
        let product: any;
    }
    namespace defaultProps {
        let groups_1: never[];
        export { groups_1 as groups };
        let product_1: {};
        export { product_1 as product };
    }
}
export default Attributes;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query ($filters: [FilterInput!]) {\n    product(id: getContextValue(\"productId\", null)) {\n      groupId\n      variantGroupId\n      attributeIndex {\n        attributeId\n        optionId\n        optionText\n      }\n    },\n    groups: attributeGroups(filters: $filters) {\n      items {\n        groupId: attributeGroupId\n        groupName\n        attributes {\n          items {\n            attributeId\n            attributeName\n            attributeCode\n            type\n            isRequired\n            options {\n              optionId: attributeOptionId\n              optionText\n            }\n          }\n        }\n      }\n    }\n  }\n";
export const variables: "\n{\n  filters: [{ key: \"limit\", operation: 'eq', value: 1000 }]\n}";
import React from 'react';
