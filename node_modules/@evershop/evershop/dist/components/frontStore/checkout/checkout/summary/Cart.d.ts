export function CartSummary({ totalQty, subTotal, subTotalInclTax, grandTotal, discountAmount, totalTaxAmount, shippingMethodName, shippingFeeInclTax, coupon, priceIncludingTax }: {
    totalQty: any;
    subTotal: any;
    subTotalInclTax: any;
    grandTotal: any;
    discountAmount: any;
    totalTaxAmount: any;
    shippingMethodName: any;
    shippingFeeInclTax: any;
    coupon: any;
    priceIncludingTax: any;
}): React.JSX.Element;
export namespace CartSummary {
    namespace propTypes {
        let coupon: any;
        let discountAmount: any;
        let grandTotal: any;
        let shippingFeeInclTax: any;
        let shippingMethodName: any;
        let subTotal: any;
        let subTotalInclTax: any;
        let totalTaxAmount: any;
        let totalQty: any;
        let priceIncludingTax: any;
    }
    namespace defaultProps {
        let coupon_1: string;
        export { coupon_1 as coupon };
        export namespace discountAmount_1 {
            let text: string;
        }
        export { discountAmount_1 as discountAmount };
        export namespace grandTotal_1 {
            let text_1: string;
            export { text_1 as text };
        }
        export { grandTotal_1 as grandTotal };
        export namespace shippingFeeInclTax_1 {
            let text_2: string;
            export { text_2 as text };
        }
        export { shippingFeeInclTax_1 as shippingFeeInclTax };
        let shippingMethodName_1: string;
        export { shippingMethodName_1 as shippingMethodName };
        export namespace subTotal_1 {
            let text_3: string;
            export { text_3 as text };
        }
        export { subTotal_1 as subTotal };
        export namespace subTotalInclTax_1 {
            let text_4: string;
            export { text_4 as text };
        }
        export { subTotalInclTax_1 as subTotalInclTax };
        export namespace totalTaxAmount_1 {
            let text_5: string;
            export { text_5 as text };
        }
        export { totalTaxAmount_1 as totalTaxAmount };
        let totalQty_1: string;
        export { totalQty_1 as totalQty };
        let priceIncludingTax_1: boolean;
        export { priceIncludingTax_1 as priceIncludingTax };
    }
}
import React from 'react';
