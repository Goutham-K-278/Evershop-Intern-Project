declare function General({ customer }: {
    customer: any;
}): React.JSX.Element;
declare namespace General {
    namespace propTypes {
        let customer: any;
    }
}
export default General;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    customer(id: getContextValue(\"customerUuid\", null)) {\n      customerId\n      fullName\n      email\n      status\n      group {\n        groupName\n      }\n    }\n  }\n";
import React from 'react';
