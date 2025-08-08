import PropTypes from 'prop-types';
import React from 'react';
export function Discount({ discount, code }) {
    return (React.createElement("div", { className: "summary-row" },
        React.createElement("span", null, "Discount"),
        React.createElement("div", null,
            React.createElement("div", null, code),
            React.createElement("div", null, discount))));
}
Discount.propTypes = {
    code: PropTypes.string,
    discount: PropTypes.string
};
Discount.defaultProps = {
    code: undefined,
    discount: 0
};
//# sourceMappingURL=Discount.js.map