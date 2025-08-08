export function Setting({ discountAmount, startDate, endDate }: {
    discountAmount: any;
    startDate: any;
    endDate: any;
}): React.JSX.Element;
export namespace Setting {
    namespace propTypes {
        let discountAmount: any;
        let endDate: any;
        let startDate: any;
    }
    namespace defaultProps {
        let discountAmount_1: string;
        export { discountAmount_1 as discountAmount };
        let endDate_1: string;
        export { endDate_1 as endDate };
        let startDate_1: string;
        export { startDate_1 as startDate };
    }
}
import React from 'react';
