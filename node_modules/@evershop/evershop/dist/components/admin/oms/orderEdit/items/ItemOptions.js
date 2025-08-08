import PropTypes from 'prop-types';
import React from 'react';
export function ItemOptions({ options = [] }) {
    if (options.length === 0) {
        return null;
    }
    const currency = '';
    return (React.createElement("div", { className: "cart-item-options" },
        React.createElement("ul", { className: "list-unstyled" }, options.map((o, i) => (React.createElement("li", { key: i },
            React.createElement("span", { className: "option-name" },
                React.createElement("strong", null,
                    o.option_name,
                    " : ")),
            o.values.map((v, k) => {
                const formatedExtraPrice = new Intl.NumberFormat('en', {
                    style: 'currency',
                    currency
                }).format(v.extra_price);
                return (React.createElement("span", { key: k },
                    React.createElement("i", { className: "value-text" }, v.value_text),
                    React.createElement("span", { className: "extra-price" },
                        "(",
                        formatedExtraPrice,
                        ")"),
                    ' '));
            })))))));
}
ItemOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        option_name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.shape({
            value_text: PropTypes.string,
            extra_price: PropTypes.number
        }))
    })).isRequired
};
//# sourceMappingURL=ItemOptions.js.map