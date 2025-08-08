import PropTypes from 'prop-types';
import React from 'react';
export default function OrderNumberRow({ editUrl, name }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("a", { className: "hover:underline font-semibold", href: editUrl },
                "#",
                name))));
}
OrderNumberRow.propTypes = {
    editUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
//# sourceMappingURL=OrderNumberRow.js.map