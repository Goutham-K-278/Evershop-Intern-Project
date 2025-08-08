declare function ShippingSettingMenu({ shippingSettingUrl }: {
    shippingSettingUrl: any;
}): React.JSX.Element;
declare namespace ShippingSettingMenu {
    namespace propTypes {
        let shippingSettingUrl: any;
    }
}
export default ShippingSettingMenu;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    shippingSettingUrl: url(routeId: \"shippingSetting\")\n  }\n";
import React from 'react';
