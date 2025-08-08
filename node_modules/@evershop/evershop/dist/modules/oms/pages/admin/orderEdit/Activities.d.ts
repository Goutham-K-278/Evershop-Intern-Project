declare function Activities({ order: { activities } }: {
    order: {
        activities?: never[] | undefined;
    };
}): React.JSX.Element;
declare namespace Activities {
    namespace propTypes {
        let order: any;
    }
}
export default Activities;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      activities {\n        comment\n        customerNotified\n        createdAt {\n          value\n          timezone\n          date: text(format: \"LLL dd\")\n          time: text(format: \"t\")\n        }\n      }\n    }\n  }\n";
import React from 'react';
