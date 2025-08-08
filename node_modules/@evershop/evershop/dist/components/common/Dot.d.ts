declare function Dot({ size, variant }: {
    size?: string | undefined;
    variant?: string | undefined;
}): React.JSX.Element;
declare namespace Dot {
    namespace propTypes {
        let size: any;
        let variant: any;
    }
    namespace defaultProps {
        let size_1: string;
        export { size_1 as size };
    }
}
export default Dot;
import React from 'react';
