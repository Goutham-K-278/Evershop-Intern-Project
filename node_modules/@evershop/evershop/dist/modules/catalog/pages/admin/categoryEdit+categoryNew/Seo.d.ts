declare function Seo({ category }: {
    category: any;
}): React.JSX.Element;
declare namespace Seo {
    namespace propTypes {
        let category: any;
    }
    namespace defaultProps {
        export namespace category_1 {
            let metaDescription: string;
            let metaKeywords: string;
            let metaTitle: string;
            let urlKey: string;
        }
        export { category_1 as category };
    }
}
export default Seo;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    category(id: getContextValue('categoryId', null)) {\n      urlKey\n      metaTitle\n      metaKeywords\n      metaDescription\n    }\n  }\n";
import React from 'react';
