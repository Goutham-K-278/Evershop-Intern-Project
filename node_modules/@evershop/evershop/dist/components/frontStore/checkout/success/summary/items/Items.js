import { ItemVariantOptions } from '@components/frontStore/checkout/cart/items/ItemVariantOptions';
import PropTypes from 'prop-types';
import React from 'react';
import './Items.scss';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';
function Items({ items, priceIncludingTax }) {
    return (React.createElement("div", { id: "summary-items" },
        React.createElement("table", { className: "listing items-table" },
            React.createElement("tbody", null, items.map((item, index) => (React.createElement("tr", { key: index },
                React.createElement("td", null,
                    React.createElement("div", { className: "product-thumbnail" },
                        React.createElement("div", { className: "thumbnail" },
                            item.thumbnail && (React.createElement("img", { src: item.thumbnail, alt: item.productName })),
                            !item.thumbnail && (React.createElement(ProductNoThumbnail, { width: 45, height: 45 }))),
                        React.createElement("span", { className: "qty" }, item.qty))),
                React.createElement("td", null,
                    React.createElement("div", { className: "product-column" },
                        React.createElement("div", null,
                            React.createElement("span", { className: "font-semibold" }, item.productName)),
                        React.createElement(ItemVariantOptions, { options: JSON.parse(item.variantOptions || '[]') }))),
                React.createElement("td", null,
                    React.createElement("span", null, priceIncludingTax
                        ? item.lineTotalInclTax.text
                        : item.lineTotal.text)))))))));
}
Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        productName: PropTypes.string.isRequired,
        qty: PropTypes.number.isRequired,
        thumbnail: PropTypes.string,
        lineTotalInclTax: PropTypes.shape({
            text: PropTypes.string.isRequired
        }).isRequired,
        lineTotal: PropTypes.shape({
            text: PropTypes.string.isRequired
        }).isRequired,
        variantOptions: PropTypes.string
    })).isRequired,
    priceIncludingTax: PropTypes.bool.isRequired
};
export { Items };
//# sourceMappingURL=Items.js.map