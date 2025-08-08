declare function QuickLinks({ dashboard }: {
    dashboard: any;
}): React.JSX.Element;
declare namespace QuickLinks {
    namespace propTypes {
        let dashboard: any;
    }
}
export default QuickLinks;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    dashboard: url(routeId: \"dashboard\")\n  }\n";
import React from 'react';
