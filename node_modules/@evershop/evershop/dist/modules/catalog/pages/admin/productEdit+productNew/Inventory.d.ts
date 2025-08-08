declare function Inventory({ product }: {
    product: any;
}): React.JSX.Element;
declare namespace Inventory {
    namespace propTypes {
        let product: any;
    }
    namespace defaultProps {
        export namespace product_1 {
            namespace inventory {
                let qty: number;
                let stockAvailability: number;
                let manageStock: number;
            }
        }
        export { product_1 as product };
    }
}
export default Inventory;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    product(id: getContextValue(\"productId\", null)) {\n      inventory {\n        qty\n        stockAvailability\n        manageStock\n      }\n    }\n  }\n";
import React from 'react';
