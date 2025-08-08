declare function CollectionEditPageHeading({ backUrl, collection }: {
    backUrl: any;
    collection: any;
}): React.JSX.Element;
declare namespace CollectionEditPageHeading {
    namespace propTypes {
        let backUrl: any;
        let collection: any;
    }
    namespace defaultProps {
        let collection_1: {};
        export { collection_1 as collection };
    }
}
export default CollectionEditPageHeading;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    collection(code: getContextValue(\"collectionCode\", null)) {\n      name\n    }\n    backUrl: url(routeId: \"collectionGrid\")\n  }\n";
import React from 'react';
