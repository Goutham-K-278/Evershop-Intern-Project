export default Footer;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query query {\n    themeConfig {\n      copyRight\n    }\n  }\n";
declare function Footer({ themeConfig: { copyRight } }: {
    themeConfig: {
        copyRight: any;
    };
}): React.JSX.Element;
declare namespace Footer {
    namespace propTypes {
        let themeConfig: any;
    }
    namespace defaultProps {
        export namespace themeConfig_1 {
            let copyRight: string;
        }
        export { themeConfig_1 as themeConfig };
    }
}
import React from 'react';
