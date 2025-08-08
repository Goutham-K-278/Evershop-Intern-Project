declare function StatusColumnHeader({ title, id, currentFilter }: {
    title: any;
    id: any;
    currentFilter?: {} | undefined;
}): React.JSX.Element;
declare namespace StatusColumnHeader {
    namespace propTypes {
        let id: any;
        let title: any;
        let currentFilter: any;
    }
    namespace defaultProps {
        let currentFilter_1: {};
        export { currentFilter_1 as currentFilter };
    }
}
export default StatusColumnHeader;
import React from 'react';
