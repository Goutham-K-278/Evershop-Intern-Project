import Area from '@components/common/Area';
import PropTypes from 'prop-types';
import React from 'react';
export default function CategoryView({ category }) {
    if (!category.showProducts) {
        return null;
    }
    return (React.createElement("div", { className: "page-width grid grid-cols-1 md:grid-cols-4 gap-8" },
        React.createElement(Area, { id: "leftColumn", className: "md:col-span-1" }),
        React.createElement(Area, { id: "rightColumn", className: "md:col-span-3" })));
}
CategoryView.propTypes = {
    category: PropTypes.shape({
        showProducts: PropTypes.number
    }).isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    category(id: getContextValue('categoryId')) {
      showProducts
    }
}`;
//# sourceMappingURL=CategoryView.js.map