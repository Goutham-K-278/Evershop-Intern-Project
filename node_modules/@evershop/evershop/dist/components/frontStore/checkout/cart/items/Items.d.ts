export default Items;
declare function Items({ items, setting: { priceIncludingTax } }: {
    items: any;
    setting: {
        priceIncludingTax: any;
    };
}): React.JSX.Element;
declare namespace Items {
    namespace propTypes {
        let items: any;
        let setting: any;
    }
}
import React from 'react';
