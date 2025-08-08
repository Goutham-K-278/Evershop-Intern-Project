declare function General({ attribute }: {
    attribute: any;
}): React.JSX.Element;
declare namespace General {
    namespace propTypes {
        let attribute: any;
    }
    namespace defaultProps {
        let attribute_1: {};
        export { attribute_1 as attribute };
    }
}
export default General;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    attribute(id: getContextValue(\"attributeId\", null)) {\n      attributeId\n      isFilterable\n      isRequired\n      displayOnFrontend\n      sortOrder\n    }\n  }\n";
import React from 'react';
