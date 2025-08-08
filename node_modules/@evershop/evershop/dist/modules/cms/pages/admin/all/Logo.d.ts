declare function Logo({ themeConfig: { logo: { src, alt, width, height } }, dashboardUrl }: {
    themeConfig: {
        logo: {
            src: any;
            alt?: string | undefined;
            width?: string | undefined;
            height?: string | undefined;
        };
    };
    dashboardUrl: any;
}): React.JSX.Element;
declare namespace Logo {
    namespace propTypes {
        let themeConfig: any;
        let dashboardUrl: any;
    }
    namespace defaultProps {
        export namespace themeConfig_1 {
            namespace logo {
                let src: string;
                let alt: string;
                let width: string;
                let height: string;
            }
        }
        export { themeConfig_1 as themeConfig };
    }
}
export default Logo;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query query {\n    themeConfig {\n      logo {\n        src\n        alt\n      }\n    }\n    dashboardUrl: url(routeId:\"dashboard\")\n  }\n";
import React from 'react';
