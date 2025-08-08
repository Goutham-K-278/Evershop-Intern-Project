import Area from '@components/common/Area';
import React from 'react';
import './CheckoutSuccess.scss';
export default function CheckoutSuccessPage() {
    return (React.createElement("div", { className: "page-width grid grid-cols-1 md:grid-cols-2 gap-12" },
        React.createElement(Area, { id: "checkoutSuccessPageLeft" }),
        React.createElement(Area, { id: "checkoutSuccessPageRight" })));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
//# sourceMappingURL=CheckoutSuccess.js.map