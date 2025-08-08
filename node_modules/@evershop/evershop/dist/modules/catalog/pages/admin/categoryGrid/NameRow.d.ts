declare function NameRow({ id, editUrl, areaProps: { row } }: {
    id: any;
    editUrl: any;
    areaProps: {
        row: any;
    };
}): React.JSX.Element;
declare namespace NameRow {
    namespace propTypes {
        let areaProps: any;
        let editUrl: any;
        let id: any;
    }
}
export default NameRow;
import React from 'react';
