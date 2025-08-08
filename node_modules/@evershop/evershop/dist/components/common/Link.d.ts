declare function Link({ crossOrigin, href, rel, type }: {
    crossOrigin?: string | undefined;
    href: any;
    rel: any;
    type: any;
}): React.JSX.Element;
declare namespace Link {
    namespace propTypes {
        let crossOrigin: any;
        let href: any;
        let rel: any;
        let type: any;
    }
    namespace defaultProps {
        let crossOrigin_1: undefined;
        export { crossOrigin_1 as crossOrigin };
        let rel_1: undefined;
        export { rel_1 as rel };
        let type_1: undefined;
        export { type_1 as type };
    }
}
export default Link;
import React from 'react';
