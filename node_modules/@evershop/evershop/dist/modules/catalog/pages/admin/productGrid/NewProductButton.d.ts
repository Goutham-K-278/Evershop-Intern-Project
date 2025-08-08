declare function NewProductButton({ newProductUrl }: {
    newProductUrl: any;
}): React.JSX.Element;
declare namespace NewProductButton {
    namespace propTypes {
        let newProductUrl: any;
    }
}
export default NewProductButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    newProductUrl: url(routeId: \"productNew\")\n  }\n";
import React from 'react';
