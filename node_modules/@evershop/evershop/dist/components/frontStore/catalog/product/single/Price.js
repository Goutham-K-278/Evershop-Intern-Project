import PropTypes from 'prop-types';
import React from 'react';
export function Price({ regular, special }) {
    return (React.createElement("h4", { className: "product-single-price" },
        special.value === regular.value && (React.createElement("div", null,
            React.createElement("span", { className: "sale-price" }, regular.text))),
        special.value < regular.value && (React.createElement("div", null,
            React.createElement("span", { className: "sale-price" }, special.text),
            ' ',
            React.createElement("span", { className: "regular-price" }, regular.text)))));
}
Price.propTypes = {
    regular: PropTypes.shape({
        value: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired,
    special: PropTypes.shape({
        value: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired
};
//# sourceMappingURL=Price.js.map