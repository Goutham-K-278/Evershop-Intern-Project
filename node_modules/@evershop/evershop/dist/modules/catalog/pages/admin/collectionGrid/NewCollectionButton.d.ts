declare function NewCollectionButton({ newCollectionUrl }: {
    newCollectionUrl: any;
}): React.JSX.Element;
declare namespace NewCollectionButton {
    namespace propTypes {
        let newCollectionUrl: any;
    }
}
export default NewCollectionButton;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    newCollectionUrl: url(routeId: \"collectionNew\")\n  }\n";
import React from 'react';
