declare function Script({ src, isAsync }: {
    src: any;
    isAsync?: boolean | undefined;
}): React.JSX.Element | null;
declare namespace Script {
    namespace propTypes {
        let isAsync: any;
        let src: any;
    }
    namespace defaultProps {
        let isAsync_1: boolean;
        export { isAsync_1 as isAsync };
    }
}
export default Script;
import React from 'react';
