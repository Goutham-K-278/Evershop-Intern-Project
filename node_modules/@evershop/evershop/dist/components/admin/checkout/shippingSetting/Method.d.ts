export default Method;
declare function Method({ method, getZones }: {
    method: any;
    getZones: any;
}): React.JSX.Element;
declare namespace Method {
    namespace propTypes {
        let method: any;
        let getZones: any;
    }
    namespace defaultProps {
        export namespace method_1 {
            namespace cost {
                let text: string;
            }
            let priceBasedCost: never[];
            let weightBasedCost: never[];
            let conditionType: null;
            let min: null;
            let max: null;
        }
        export { method_1 as method };
    }
}
import React from 'react';
