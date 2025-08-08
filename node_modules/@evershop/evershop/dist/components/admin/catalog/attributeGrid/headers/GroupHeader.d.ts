declare function GroupHeader({ id, currentFilters }: {
    id: any;
    currentFilters?: never[] | undefined;
}): React.JSX.Element;
declare namespace GroupHeader {
    namespace propTypes {
        let id: any;
        let currentFilters: any;
    }
    namespace defaultProps {
        let currentFilters_1: never[];
        export { currentFilters_1 as currentFilters };
    }
}
export default GroupHeader;
import React from 'react';
