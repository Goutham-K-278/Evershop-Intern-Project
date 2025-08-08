import PropTypes from 'prop-types';
import React from 'react';
function Price({ regular, special }) {
    return (React.createElement("div", { className: "product-price-listing" },
        regular.value === special.value && (React.createElement("div", null,
            React.createElement("span", { className: "sale-price font-semibold" }, regular.text))),
        special.value < regular.value && (React.createElement("div", null,
            React.createElement("span", { className: "sale-price text-critical font-semibold" }, special.text),
            ' ',
            React.createElement("span", { className: "regular-price font-semibold" }, regular.text)))));
}
Price.propTypes = {
    regular: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string
    }).isRequired,
    special: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string
    }).isRequired
};
export { Price };
//# sourceMappingURL=Price.js.map