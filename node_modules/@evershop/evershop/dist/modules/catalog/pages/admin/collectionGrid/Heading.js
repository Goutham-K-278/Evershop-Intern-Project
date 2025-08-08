import PageHeading from '@components/admin/cms/PageHeading';
import React from 'react';
export default function Heading() {
    return (React.createElement("div", { className: "w-2/3", style: { margin: '0 auto' } },
        React.createElement(PageHeading, { backUrl: null, heading: "Collections" })));
}
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
//# sourceMappingURL=Heading.js.map