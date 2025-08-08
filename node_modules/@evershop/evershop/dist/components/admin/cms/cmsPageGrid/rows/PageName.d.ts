declare function PageName({ url, name }: {
    url: any;
    name: any;
}): React.JSX.Element;
declare namespace PageName {
    namespace propTypes {
        let name: any;
        let url: any;
    }
}
export default PageName;
import React from 'react';
