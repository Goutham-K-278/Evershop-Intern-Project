import { ItemVariantOptions } from '@components/admin/oms/orderEdit/items/ItemVariantOptions';
import PropTypes from 'prop-types';
import React from 'react';
export function Name({ name, productSku, productUrl, variantOptions = [] }) {
    return (React.createElement("td", null,
        React.createElement("div", { className: "product-column" },
            React.createElement("div", null,
                React.createElement("span", { className: "font-semibold" },
                    React.createElement("a", { href: productUrl }, name))),
            React.createElement("div", { className: "text-gray-500" },
                React.createElement("span", { className: "font-semibold" }, "SKU: "),
                React.createElement("span", null, productSku)),
            React.createElement(ItemVariantOptions, { options: variantOptions }))));
}
Name.propTypes = {
    name: PropTypes.string.isRequired,
    productSku: PropTypes.string.isRequired,
    productUrl: PropTypes.string.isRequired,
    variantOptions: PropTypes.arrayOf(PropTypes.shape({
        option_name: PropTypes.string,
        values: PropTypes.arrayOf(PropTypes.shape({
            value_text: PropTypes.string,
            extra_price: PropTypes.number
        }))
    }))
};
Name.defaultProps = {
    variantOptions: []
};
//# sourceMappingURL=Name.js.map