declare function SearchBox({ resourceLinks }: {
    resourceLinks: any;
}): React.JSX.Element;
declare namespace SearchBox {
    namespace propTypes {
        let resourceLinks: any;
    }
    namespace defaultProps {
        let resourceLinks_1: never[];
        export { resourceLinks_1 as resourceLinks };
    }
}
export default SearchBox;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
import React from 'react';
