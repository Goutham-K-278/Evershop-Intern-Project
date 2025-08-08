export function TargetProducts({ products, maxQty, discountType }: {
    products: any;
    maxQty: any;
    discountType: any;
}): React.JSX.Element | null;
export namespace TargetProducts {
    namespace propTypes {
        let discountType: any;
        let maxQty: any;
        let products: any;
    }
    namespace defaultProps {
        let discountType_1: string;
        export { discountType_1 as discountType };
        let maxQty_1: string;
        export { maxQty_1 as maxQty };
        let products_1: never[];
        export { products_1 as products };
    }
}
import React from 'react';
