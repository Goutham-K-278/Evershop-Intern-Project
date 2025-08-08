declare function SortableHeader({ title, name, currentFilters }: {
    title: any;
    name: any;
    currentFilters: any;
}): React.JSX.Element;
declare namespace SortableHeader {
    namespace propTypes {
        let title: any;
        let name: any;
        let currentFilters: any;
    }
    namespace defaultProps {
        let currentFilters_1: never[];
        export { currentFilters_1 as currentFilters };
    }
}
export default SortableHeader;
import React from 'react';
