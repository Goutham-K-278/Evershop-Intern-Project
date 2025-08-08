declare function NewPageButton({ newPageUrl }: {
    newPageUrl: any;
}): React.JSX.Element;
declare namespace NewPageButton {
    namespace propTypes {
        let newPageUrl: any;
    }
}
export default NewPageButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    newPageUrl: url(routeId: \"cmsPageNew\")\n  }\n";
import React from 'react';
