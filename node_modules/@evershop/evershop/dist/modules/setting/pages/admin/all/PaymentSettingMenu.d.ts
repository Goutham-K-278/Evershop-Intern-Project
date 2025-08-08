declare function PaymentSettingMenu({ paymentSettingUrl }: {
    paymentSettingUrl: any;
}): React.JSX.Element;
declare namespace PaymentSettingMenu {
    namespace propTypes {
        let paymentSettingUrl: any;
    }
}
export default PaymentSettingMenu;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    paymentSettingUrl: url(routeId: \"paymentSetting\")\n  }\n";
import React from 'react';
