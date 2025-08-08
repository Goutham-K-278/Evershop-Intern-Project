declare function SaleStatistic({ api }: {
    api: any;
}): React.JSX.Element;
declare namespace SaleStatistic {
    namespace propTypes {
        let api: any;
    }
}
export default SaleStatistic;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    api: url(routeId: \"salestatistic\")    \n  }\n";
import React from 'react';
