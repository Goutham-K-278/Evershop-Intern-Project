declare function ProductEditForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace ProductEditForm {
    namespace propTypes {
        let action: any;
    }
}
export default ProductEditForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"updateProduct\", params: [{key: \"id\", value: getContextValue(\"productUuid\")}]),\n    gridUrl: url(routeId: \"productGrid\")\n  }\n";
import React from 'react';
