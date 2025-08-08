import PropTypes from 'prop-types';
import React from 'react';
import './Items.scss';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';
function ItemVariantOptions({ options = [] }) {
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
        thumbnail: PropTypes.string,
        productName: PropTypes.string,
        variantOptions: PropTypes.string,
        qty: PropTypes.number,
        lineTotalInclTax: PropTypes.shape({
            text: PropTypes.string
        }),
        lineTotal: PropTypes.shape({
            text: PropTypes.string
        })
    })),
    priceIncludingTax: PropTypes.bool
};
Items.defaultProps = {
    items: [],
    priceIncludingTax: false
};
export { Items };
//# sourceMappingURL=Items.js.map