declare function FormContent({ gridUrl }: {
    gridUrl: any;
}): React.JSX.Element;
declare namespace FormContent {
    namespace propTypes {
        let gridUrl: any;
    }
}
export default FormContent;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    gridUrl: url(routeId: \"couponGrid\")\n  }\n";
import React from 'react';
