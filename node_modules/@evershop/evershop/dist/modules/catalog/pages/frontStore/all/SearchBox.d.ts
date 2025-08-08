declare function SearchBox({ searchPageUrl }: {
    searchPageUrl: any;
}): React.JSX.Element;
declare namespace SearchBox {
    namespace propTypes {
        let searchPageUrl: any;
    }
}
export default SearchBox;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    searchPageUrl: url(routeId: \"catalogSearch\")\n  }\n";
import React from 'react';
