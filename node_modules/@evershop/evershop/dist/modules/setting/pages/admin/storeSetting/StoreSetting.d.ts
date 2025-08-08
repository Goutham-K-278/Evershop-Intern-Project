declare function StoreSetting({ saveSettingApi, setting: { storeName, storeDescription, storePhoneNumber, storeEmail, storeCountry, storeAddress, storeCity, storeProvince, storePostalCode } }: {
    saveSettingApi: any;
    setting: {
        storeName: any;
        storeDescription: any;
        storePhoneNumber: any;
        storeEmail: any;
        storeCountry: any;
        storeAddress: any;
        storeCity: any;
        storeProvince: any;
        storePostalCode: any;
    };
}): React.JSX.Element;
declare namespace StoreSetting {
    namespace propTypes {
        let saveSettingApi: any;
        let setting: any;
    }
}
export default StoreSetting;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    saveSettingApi: url(routeId: \"saveSetting\")\n    setting {\n      storeName\n      storeDescription\n      storeTimeZone\n      storePhoneNumber\n      storeEmail\n      storeCountry\n      storeAddress\n      storeCity\n      storeProvince\n      storePostalCode\n    }\n  }\n";
import React from 'react';
