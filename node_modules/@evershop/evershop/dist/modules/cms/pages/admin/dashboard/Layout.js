import Area from '@components/common/Area';
import React from 'react';
import './Layout.scss';
export default function DashboardLayout() {
    return (React.createElement("div", { className: "grid grid-cols-3 gap-x-8 grid-flow-row " },
        React.createElement("div", { className: "col-span-2 grid grid-cols-1 gap-8 auto-rows-max" },
            React.createElement(Area, { id: "leftSide", noOuter: true })),
        React.createElement("div", { className: "col-span-1 grid grid-cols-1 gap-8 auto-rows-max" },
            React.createElement(Area, { id: "rightSide", noOuter: true }))));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
//# sourceMappingURL=Layout.js.map