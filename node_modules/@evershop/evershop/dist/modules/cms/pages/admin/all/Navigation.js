import Area from '@components/common/Area';
import React from 'react';
import './Navigation.scss';
export default function AdminNavigation() {
    return (React.createElement("div", { className: "admin-nav-container" },
        React.createElement("div", { className: "admin-nav" },
            React.createElement("ul", { className: "list-unstyled" },
                React.createElement(Area, { id: "adminMenu", noOuter: true })))));
}
export const layout = {
    areaId: 'adminNavigation',
    sortOrder: 10
};
//# sourceMappingURL=Navigation.js.map