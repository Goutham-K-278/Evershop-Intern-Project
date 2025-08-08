declare function PaymentSetting({ saveSettingApi }: {
    saveSettingApi: any;
}): React.JSX.Element;
declare namespace PaymentSetting {
    namespace propTypes {
        let saveSettingApi: any;
    }
}
export default PaymentSetting;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    saveSettingApi: url(routeId: \"saveSetting\")\n  }\n";
import React from 'react';
