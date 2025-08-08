declare function ShippingNote({ setting: { showShippingNote }, order: { shippingNote } }: {
    setting: {
        showShippingNote: any;
    };
    order: {
        shippingNote: any;
    };
}): React.JSX.Element | null;
declare namespace ShippingNote {
    namespace propTypes {
        let setting: any;
        let order: any;
    }
    namespace defaultProps {
        export namespace setting_1 {
            let showShippingNote: boolean;
        }
        export { setting_1 as setting };
        export namespace order_1 {
            let shippingNote: string;
        }
        export { order_1 as order };
    }
}
export default ShippingNote;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order (uuid: getContextValue('orderId')) {\n      shippingNote\n    }\n    setting {\n      showShippingNote\n    }\n  }\n";
import React from 'react';
