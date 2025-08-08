declare function CODPayment({ setting: { codPaymentStatus, codDisplayName } }: {
    setting: {
        codPaymentStatus: any;
        codDisplayName: any;
    };
}): React.JSX.Element;
declare namespace CODPayment {
    namespace propTypes {
        let setting: any;
    }
}
export default CODPayment;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    setting {\n      codPaymentStatus\n      codDisplayName\n    }\n  }\n";
import React from 'react';
