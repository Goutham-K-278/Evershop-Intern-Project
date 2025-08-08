declare function TaxSettingMenu({ taxSettingUrl }: {
    taxSettingUrl: any;
}): React.JSX.Element;
declare namespace TaxSettingMenu {
    namespace propTypes {
        let taxSettingUrl: any;
    }
}
export default TaxSettingMenu;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    taxSettingUrl: url(routeId: \"taxSetting\")\n  }\n";
import React from 'react';
