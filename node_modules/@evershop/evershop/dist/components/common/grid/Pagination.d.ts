declare function Pagination({ total, limit, page }: {
    total: any;
    limit: any;
    page: any;
}): React.JSX.Element;
declare namespace Pagination {
    namespace propTypes {
        let limit: any;
        let page: any;
        let total: any;
    }
}
export default Pagination;
import React from 'react';
