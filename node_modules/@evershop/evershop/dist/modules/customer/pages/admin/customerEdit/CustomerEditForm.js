import Area from '@components/common/Area';
import React from 'react';
export default function CustomerEditForm() {
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
export const query = `
  query Query {
    gridUrl: url(routeId: "customerGrid")
  }
`;
//# sourceMappingURL=CustomerEditForm.js.map