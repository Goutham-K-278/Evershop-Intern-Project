export function Total({ total, totalTaxAmount, priceIncludingTax }: {
    total: any;
    totalTaxAmount: any;
    priceIncludingTax: any;
}): React.JSX.Element;
export namespace Total {
    namespace propTypes {
        let total: any;
        let totalTaxAmount: any;
        let priceIncludingTax: any;
    }
    namespace defaultProps {
        let priceIncludingTax_1: boolean;
        export { priceIncludingTax_1 as priceIncludingTax };
    }
}
import React from 'react';
