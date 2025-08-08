declare function ShippingNote({ setting: { showShippingNote }, cart: { shippingNote, addNoteApi } }: {
    setting: {
        showShippingNote: any;
    };
    cart: {
        shippingNote: any;
        addNoteApi: any;
    };
}): React.JSX.Element | null;
declare namespace ShippingNote {
    namespace propTypes {
        let setting: any;
        let cart: any;
    }
    namespace defaultProps {
        export namespace setting_1 {
            let showShippingNote: boolean;
        }
        export { setting_1 as setting };
        export namespace cart_1 {
            let shippingNote: string;
        }
        export { cart_1 as cart };
    }
}
export default ShippingNote;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    cart {\n      shippingNote\n      addNoteApi\n    }\n    setting {\n      showShippingNote\n    }\n  }\n";
import React from 'react';
