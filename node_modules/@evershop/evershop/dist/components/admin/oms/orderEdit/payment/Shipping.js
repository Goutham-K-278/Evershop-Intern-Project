import PropTypes from 'prop-types';
import React from 'react';
export function Shipping({ method, cost }) {
    return (React.createElement("div", { className: "summary-row" },
        React.createElement("span", null, "Shipping"),
        React.createElement("div", null,
            React.createElement("div", null, method),
            React.createElement("div", null, cost))));
}
Shipping.propTypes = {
    cost: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
};
//# sourceMappingURL=Shipping.js.map