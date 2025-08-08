declare function PaypalPayment({ setting: { paypalPaymentStatus, paypalDisplayName, paypalClientId, paypalClientSecret, paypalEnvironment, paypalPaymentIntent } }: {
    setting: {
        paypalPaymentStatus: any;
        paypalDisplayName: any;
        paypalClientId: any;
        paypalClientSecret: any;
        paypalEnvironment: any;
        paypalPaymentIntent: any;
    };
}): React.JSX.Element;
declare namespace PaypalPayment {
    namespace propTypes {
        let setting: any;
    }
    namespace defaultProps {
        export namespace setting_1 {
            let paypalPaymentStatus: number;
            let paypalDisplayName: string;
            let paypalClientId: string;
            let paypalClientSecret: string;
            let paypalEnvironment: string;
            let paypalPaymentIntent: string;
        }
        export { setting_1 as setting };
    }
}
export default PaypalPayment;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    setting {\n      paypalPaymentStatus\n      paypalDisplayName\n      paypalClientId\n      paypalClientSecret\n      paypalEnvironment\n      paypalPaymentIntent\n    }\n  }\n";
import React from 'react';
