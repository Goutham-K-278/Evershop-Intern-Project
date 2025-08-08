declare function Quantity({ qty, api }: {
    qty: any;
    api: any;
}): React.JSX.Element;
declare namespace Quantity {
    namespace propTypes {
        let qty: any;
        let api: any;
    }
}
export default Quantity;
import React from 'react';
