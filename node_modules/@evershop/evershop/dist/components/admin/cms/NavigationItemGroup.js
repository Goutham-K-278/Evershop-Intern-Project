import { NavigationItem } from '@components/admin/cms/NavigationItem.jsx';
import Area from '@components/common/Area.jsx';
import React from 'react';
import './NavigationItemGroup.scss';
export function NavigationItemGroup({ id, name, items = [], Icon = null, url = null }) {
    return (React.createElement("li", { className: "root-nav-item nav-item" },
        React.createElement("div", { className: "flex justify-between items-center" },
            React.createElement("div", { className: "root-label flex justify-between items-center" },
                Icon && (React.createElement("span", null,
                    React.createElement(Icon, null))),
                !url && React.createElement("span", null, name),
                url && React.createElement("a", { href: url }, name))),
        React.createElement("ul", { className: "item-group" },
            React.createElement(Area, { id: id, noOuter: true, coreComponents: items.map((item) => ({
                    component: {
                        default: () => (React.createElement(NavigationItem, { Icon: item.Icon, url: item.url, title: item.title }))
                    }
                })) }))));
}
NavigationItemGroup.defaultProps = {
    items: [],
    Icon: null,
    url: null
};
//# sourceMappingURL=NavigationItemGroup.js.map