declare function CollectionNewForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace CollectionNewForm {
    namespace propTypes {
        let action: any;
    }
}
export default CollectionNewForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"createCollection\")\n    gridUrl: url(routeId: \"collectionGrid\")\n  }\n";
import React from 'react';
