import PropTypes from 'prop-types';
import React from 'react';
export function SubTotal({ count, total }) {
    return (React.createElement("div", { className: "summary-row" },
        React.createElement("span", null, "Subtotal"),
        React.createElement("div", null,
            React.createElement("div", null,
                count,
                " items"),
            React.createElement("div", null, total))));
}
SubTotal.propTypes = {
    count: PropTypes.number.isRequired,
    total: PropTypes.string.isRequired
};
//# sourceMappingURL=SubTotal.js.map