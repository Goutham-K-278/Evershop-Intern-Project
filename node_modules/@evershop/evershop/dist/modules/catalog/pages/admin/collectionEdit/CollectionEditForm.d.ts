declare function CollectionEditForm({ action }: {
    action: any;
}): React.JSX.Element;
declare namespace CollectionEditForm {
    namespace propTypes {
        let action: any;
    }
}
export default CollectionEditForm;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    action: url(routeId: \"updateCollection\", params: [{key: \"id\", value: getContextValue(\"collectionUuid\")}]),\n    gridUrl: url(routeId: \"collectionGrid\")\n  }\n";
import React from 'react';
