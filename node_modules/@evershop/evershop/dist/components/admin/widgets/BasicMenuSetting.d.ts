declare function BasicMenuSetting({ basicMenuWidget: { menus, isMain, className } }: {
    basicMenuWidget: {
        menus: any;
        isMain: any;
        className: any;
    };
}): React.JSX.Element;
declare namespace BasicMenuSetting {
    namespace propTypes {
        let basicMenuWidget: any;
    }
    namespace defaultProps {
        export namespace basicMenuWidget_1 {
            let menus: never[];
            let isMain: number;
            let className: string;
        }
        export { basicMenuWidget_1 as basicMenuWidget };
    }
}
export default BasicMenuSetting;
export const query: "\n  query Query($settings: JSON) {\n    basicMenuWidget(settings: $settings) {\n      menus {\n        id\n        name\n        url\n        type\n        uuid\n        children {\n          id\n          name\n          url\n          type\n          uuid\n        }\n      }\n      isMain\n      className\n    }\n  }\n";
export const variables: "{\n  settings: getWidgetSetting()\n}";
import React from 'react';
