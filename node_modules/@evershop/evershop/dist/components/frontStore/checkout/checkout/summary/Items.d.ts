export function Items({ items, priceIncludingTax }: {
    items: any;
    priceIncludingTax: any;
}): React.JSX.Element;
export namespace Items {
    namespace propTypes {
        let items: any;
        let priceIncludingTax: any;
    }
    namespace defaultProps {
        let items_1: never[];
        export { items_1 as items };
        let priceIncludingTax_1: boolean;
        export { priceIncludingTax_1 as priceIncludingTax };
    }
}
import React from 'react';
