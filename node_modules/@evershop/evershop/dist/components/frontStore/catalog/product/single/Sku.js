import PropTypes from 'prop-types';
import React from 'react';
export function Sku({ sku }) {
    return (React.createElement("div", { className: "product-single-sku text-textSubdued" },
        React.createElement("span", null, "Sku"),
        React.createElement("span", null, ": "),
        sku));
}
Sku.propTypes = {
    sku: PropTypes.string.isRequired
};
//# sourceMappingURL=Sku.js.map