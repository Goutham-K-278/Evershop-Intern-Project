declare function StoreSettingMenu({ storeSettingUrl }: {
    storeSettingUrl: any;
}): React.JSX.Element;
declare namespace StoreSettingMenu {
    namespace propTypes {
        let storeSettingUrl: any;
    }
}
export default StoreSettingMenu;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    storeSettingUrl: url(routeId: \"storeSetting\")\n  }\n";
import React from 'react';
