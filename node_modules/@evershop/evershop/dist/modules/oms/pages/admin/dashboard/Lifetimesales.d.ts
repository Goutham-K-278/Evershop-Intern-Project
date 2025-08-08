declare function LifetimeSale({ api }: {
    api: any;
}): React.JSX.Element;
declare namespace LifetimeSale {
    namespace propTypes {
        let api: any;
    }
}
export default LifetimeSale;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    api: url(routeId: \"lifetimesales\")    \n  }\n";
import React from 'react';
