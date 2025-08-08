import Area from '@components/common/Area';
import React from 'react';
import './Layout.scss';
import './tailwind.scss';
export default function AdminLayout() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "header" },
            React.createElement(Area, { id: "header", noOuter: true })),
        React.createElement("div", { className: "content-wrapper" },
            React.createElement("div", { className: "admin-navigation" },
                React.createElement(Area, { id: "adminNavigation", noOuter: true })),
            React.createElement("div", { className: "main-content" },
                React.createElement(Area, { id: "content", className: "main-content-inner" }),
                React.createElement("div", { className: "footer flex justify-between" },
                    React.createElement(Area, { id: "footerLeft", className: "footer-left" }),
                    React.createElement(Area, { id: "footerRight", className: "footer-right" }))))));
}
export const layout = {
    areaId: 'body',
    sortOrder: 10
};
//# sourceMappingURL=Layout.js.map