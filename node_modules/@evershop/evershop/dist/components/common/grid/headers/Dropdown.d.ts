declare function DropdownColumnHeader({ title, id, options, currentFilters }: {
    title: any;
    id: any;
    options?: never[] | undefined;
    currentFilters?: never[] | undefined;
}): React.JSX.Element;
declare namespace DropdownColumnHeader {
    namespace propTypes {
        let id: any;
        let options: any;
        let title: any;
        let currentFilters: any;
    }
    namespace defaultProps {
        let currentFilters_1: never[];
        export { currentFilters_1 as currentFilters };
    }
}
export default DropdownColumnHeader;
import React from 'react';
