declare function TaxSetting({ createTaxClassApi, saveSettingApi, setting }: {
    createTaxClassApi: any;
    saveSettingApi: any;
    setting: any;
}): React.JSX.Element;
declare namespace TaxSetting {
    namespace propTypes {
        let createTaxClassApi: any;
        let saveSettingApi: any;
        let setting: any;
    }
}
export default TaxSetting;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    createTaxClassApi: url(routeId: \"createTaxClass\")\n    saveSettingApi: url(routeId: \"saveSetting\")\n    setting {\n      defaultProductTaxClassId\n      defaultShippingTaxClassId\n      baseCalculationAddress\n    }\n  }\n";
import React from 'react';
