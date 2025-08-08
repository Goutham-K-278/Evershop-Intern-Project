declare function CustomerNotes({ order: { shippingNote } }: {
    order: {
        shippingNote: any;
    };
}): React.JSX.Element;
declare namespace CustomerNotes {
    namespace propTypes {
        let order: any;
    }
}
export default CustomerNotes;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    order(uuid: getContextValue(\"orderId\")) {\n      shippingNote\n    }\n  }\n";
import React from 'react';
