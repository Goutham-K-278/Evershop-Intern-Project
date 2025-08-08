export function Shipping({ method, cost }: {
    method: any;
    cost: any;
}): React.JSX.Element | null;
export namespace Shipping {
    namespace propTypes {
        let cost: any;
        let method: any;
    }
    namespace defaultProps {
        let cost_1: undefined;
        export { cost_1 as cost };
        let method_1: undefined;
        export { method_1 as method };
    }
}
import React from 'react';
