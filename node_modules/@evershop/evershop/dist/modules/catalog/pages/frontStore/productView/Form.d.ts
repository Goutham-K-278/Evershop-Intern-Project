declare function ProductForm({ product, action }: {
    product: any;
    action: any;
}): React.JSX.Element;
declare namespace ProductForm {
    namespace propTypes {
        let action: any;
        let product: any;
    }
}
export default ProductForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product(id: getContextValue('productId')) {\n      productId\n      sku\n      name\n      gallery {\n        thumb\n      }\n      inventory {\n        isInStock\n      }\n    }\n    action:url (routeId: \"addMineCartItem\")\n  }\n";
import React from 'react';
