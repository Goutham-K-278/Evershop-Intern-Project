declare function CopyRight({ themeConfig: { copyRight } }: {
    themeConfig: {
        copyRight: any;
    };
}): React.JSX.Element;
declare namespace CopyRight {
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
export default CopyRight;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query query {\n    themeConfig {\n      copyRight\n    }\n  }\n";
import React from 'react';
