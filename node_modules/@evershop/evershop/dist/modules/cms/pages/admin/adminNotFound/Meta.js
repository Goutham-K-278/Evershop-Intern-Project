import Meta from '@components/common/Meta';
import Title from '@components/common/Title';
import React from 'react';
export default function SeoMeta() {
    return (React.createElement(React.Fragment, null,
        React.createElement(Title, { title: "Page Not Found" }),
        React.createElement(Meta, { name: "description", content: "Page Not Found" })));
}
export const layout = {
    areaId: 'head',
    sortOrder: 1
};
//# sourceMappingURL=Meta.js.map