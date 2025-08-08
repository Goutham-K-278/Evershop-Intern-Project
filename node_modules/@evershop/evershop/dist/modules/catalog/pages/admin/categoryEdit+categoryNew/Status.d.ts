declare function Status({ category }: {
    category: any;
}): React.JSX.Element;
declare namespace Status {
    namespace propTypes {
        let category: any;
    }
    namespace defaultProps {
        let category_1: {};
        export { category_1 as category };
    }
}
export default Status;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    category(id: getContextValue(\"categoryId\", null)) {\n      status\n      includeInNav\n      showProducts\n    }\n  }\n";
import React from 'react';
