declare function HeadTags({ pageInfo: { title, description }, themeConfig: { headTags: { metas, links, scripts, base } } }: {
    pageInfo: {
        title: any;
        description: any;
    };
    themeConfig: {
        headTags: {
            metas: any;
            links: any;
            scripts: any;
            base: any;
        };
    };
}): React.JSX.Element;
declare namespace HeadTags {
    namespace propTypes {
        let pageInfo: any;
        let themeConfig: any;
    }
    namespace defaultProps {
        export namespace themeConfig_1 {
            namespace headTags {
                let metas: never[];
                let links: never[];
                let scripts: never[];
                let base: undefined;
            }
        }
        export { themeConfig_1 as themeConfig };
    }
}
export default HeadTags;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query query {\n    pageInfo {\n      title\n      description\n    }\n    themeConfig {\n      headTags {\n        metas {\n          name\n          content\n          charSet\n          httpEquiv\n          property\n          itemProp\n          itemType\n          itemID\n          lang\n        }\n        links {\n          rel\n          href\n          sizes\n          type\n          hrefLang\n          media\n          title\n          as\n          crossOrigin\n          integrity\n          referrerPolicy\n        }\n        scripts {\n          src\n          type\n          async\n          defer\n          crossOrigin\n          integrity\n          noModule\n          nonce\n        }\n        base {\n          href\n          target\n        }\n      }\n    }\n  }\n";
import React from 'react';
