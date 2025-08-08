declare function Status({ order: { status } }: {
    order: {
        status: any;
    };
}): React.JSX.Element | null;
declare namespace Status {
    namespace propTypes {
        let order: any;
    }
}
export default Status;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      status {\n        code\n        badge\n        progress\n        name\n      }\n    }\n  }\n";
import React from 'react';
