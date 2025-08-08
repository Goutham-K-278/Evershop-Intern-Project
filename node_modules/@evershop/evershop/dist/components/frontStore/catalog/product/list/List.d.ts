declare function ProductList({ products, countPerRow }: {
    products?: never[] | undefined;
    countPerRow?: number | undefined;
}): React.JSX.Element;
declare namespace ProductList {
    namespace propTypes {
        let products: any;
        let countPerRow: any;
    }
}
export default ProductList;
import React from 'react';
