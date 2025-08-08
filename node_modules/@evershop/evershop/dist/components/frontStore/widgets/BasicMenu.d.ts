declare function BasicMenu({ basicMenuWidget: { menus, isMain, className } }: {
    basicMenuWidget: {
        menus: any;
        isMain: any;
        className: any;
    };
}): React.JSX.Element;
declare namespace BasicMenu {
    namespace propTypes {
        let basicMenuWidget: any;
    }
}
export default BasicMenu;
export const query: "\n  query Query($settings: JSON) {\n    basicMenuWidget(settings: $settings) {\n      menus {\n        id\n        name\n        url\n        type\n        uuid\n        children {\n          name\n          url\n          type\n          uuid\n        }\n      }\n      isMain\n      className\n    }\n  }\n";
export const variables: "{\n  settings: getWidgetSetting()\n}";
import React from 'react';
