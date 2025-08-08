import PropTypes from 'prop-types';
import React from 'react';
export function Price({ price, qty }) {
    return (React.createElement("td", null,
        React.createElement("div", { className: "product-price" },
            React.createElement("span", null,
                price,
                " x ",
                qty))));
}
Price.propTypes = {
    price: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired
};
//# sourceMappingURL=Price.js.map