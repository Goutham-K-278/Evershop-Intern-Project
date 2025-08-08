export default Error;
declare function Error({ error }: {
    error: any;
}): React.JSX.Element | null;
declare namespace Error {
    namespace propTypes {
        let error: any;
    }
    namespace defaultProps {
        let error_1: undefined;
        export { error_1 as error };
    }
}
import React from 'react';
