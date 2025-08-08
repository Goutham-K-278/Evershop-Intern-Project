import Area from '@components/common/Area';
import React from 'react';
export default function ProductPageLayout() {
    return (React.createElement("div", { className: "product-detail" },
        React.createElement(Area, { id: "productPageTop", className: "product-page-top" }),
        React.createElement("div", { className: "product-page-middle page-width" },
            React.createElement("div", { className: "grid grid-cols-1 gap-12 md:grid-cols-2" },
                React.createElement(Area, { id: "productPageMiddleLeft" }),
                React.createElement(Area, { id: "productPageMiddleRight" }))),
        React.createElement(Area, { id: "productPageBottom", className: "product-page-top" })));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
//# sourceMappingURL=Layout.js.map