import Area from '@components/common/Area';
import LoadingBar from '@components/common/LoadingBar';
import React from 'react';
import './Layout.scss';
import './tailwind.scss';
export default function Layout() {
    return (React.createElement(React.Fragment, null,
        React.createElement(LoadingBar, null),
        React.createElement("div", { className: "header grid grid-cols-3" },
            React.createElement(Area, { id: "header", noOuter: true, coreComponents: [
                    {
                        component: { default: Area },
                        props: {
                            id: 'icon-wrapper',
                            className: 'icon-wrapper flex justify-end space-x-4'
                        },
                        sortOrder: 20
                    }
                ] })),
        React.createElement("main", { className: "content" },
            React.createElement(Area, { id: "content", noOuter: true })),
        React.createElement("div", { className: "footer" },
            React.createElement(Area, { id: "footer", noOuter: true, coreComponents: [] }))));
}
export const layout = {
    areaId: 'body',
    sortOrder: 1
};
//# sourceMappingURL=Layout.js.map