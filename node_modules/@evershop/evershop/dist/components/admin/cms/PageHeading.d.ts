export default PageHeading;
declare function PageHeading({ backUrl, heading }: {
    backUrl: any;
    heading: any;
}): React.JSX.Element | null;
declare namespace PageHeading {
    namespace propTypes {
        let backUrl: any;
        let heading: any;
    }
    namespace defaultProps {
        let backUrl_1: undefined;
        export { backUrl_1 as backUrl };
    }
}
import React from 'react';
