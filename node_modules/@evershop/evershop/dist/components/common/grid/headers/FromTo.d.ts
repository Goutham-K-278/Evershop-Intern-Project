declare function FromToColumnHeader({ title, id, currentFilters }: {
    title: any;
    id: any;
    currentFilters?: never[] | undefined;
}): React.JSX.Element;
declare namespace FromToColumnHeader {
    namespace propTypes {
        let id: any;
        let title: any;
        let currentFilters: any;
    }
    namespace defaultProps {
        let currentFilters_1: never[];
        export { currentFilters_1 as currentFilters };
    }
}
export default FromToColumnHeader;
import React from 'react';
