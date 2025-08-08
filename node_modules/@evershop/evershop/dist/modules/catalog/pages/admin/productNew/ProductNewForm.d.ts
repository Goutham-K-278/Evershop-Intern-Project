declare function ProductNewForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace ProductNewForm {
    namespace propTypes {
        let action: any;
    }
}
export default ProductNewForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"createProduct\")\n    gridUrl: url(routeId: \"productGrid\")\n  }\n";
import React from 'react';
