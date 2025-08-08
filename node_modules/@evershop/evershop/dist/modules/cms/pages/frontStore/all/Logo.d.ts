declare function Logo({ themeConfig: { logo: { src, alt, width, height } } }: {
    themeConfig: {
        logo: {
            src: any;
            alt?: string | undefined;
            width?: string | undefined;
            height?: string | undefined;
        };
    };
}): React.JSX.Element;
declare namespace Logo {
    namespace propTypes {
        let themeConfig: any;
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
export const query: "\n  query query {\n    themeConfig {\n      logo {\n        src\n        alt\n        width\n        height\n      }\n    }\n  }\n";
import React from 'react';
