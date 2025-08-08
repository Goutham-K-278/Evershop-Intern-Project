import PropTypes from 'prop-types';
import React from 'react';
export default function CategoryNameRow({ category }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("a", { className: "hover:underline font-semibold", href: category.editUrl }, category.path.map((p) => p.name).join(' / ')))));
}
CategoryNameRow.propTypes = {
    category: PropTypes.shape({
        editUrl: PropTypes.string.isRequired,
        path: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};
//# sourceMappingURL=CategoryName.js.map