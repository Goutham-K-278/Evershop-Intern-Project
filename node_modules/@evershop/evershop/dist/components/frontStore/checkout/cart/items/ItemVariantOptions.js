import PropTypes from 'prop-types';
import React from 'react';
export function ItemVariantOptions({ options = [] }) {
    if (!Array.isArray(options) || !options || options.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: "cart-item-variant-options mt-2" },
        React.createElement("ul", null, options.map((o, i) => (React.createElement("li", { key: i },
            React.createElement("span", { className: "attribute-name" },
                o.attribute_name,
                ": "),
            React.createElement("span", null, o.option_text)))))));
}
ItemVariantOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        attribute_name: PropTypes.string,
        option_text: PropTypes.string
    }))
};
ItemVariantOptions.defaultProps = {
    options: []
};
//# sourceMappingURL=ItemVariantOptions.js.map