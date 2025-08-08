import ProductNoThumbnail from '@components/common/ProductNoThumbnail';
import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../lib/locale/translate/_.js';
export default function Order({ order }) {
    return (React.createElement("div", { className: "order border-divider" },
        React.createElement("div", { className: "order-inner grid grid-cols-1 md:grid-cols-3 gap-8" },
            React.createElement("div", { className: "order-items col-span-2" }, order.items.map((item) => (React.createElement("div", { className: "order-item mb-4 flex gap-8 items-center", key: item.productSku },
                React.createElement("div", { className: "thumbnail border border-divider p-4 rounded" },
                    item.thumbnail && (React.createElement("img", { style: { maxWidth: '6rem' }, src: item.thumbnail, alt: item.productName })),
                    !item.thumbnail && (React.createElement(ProductNoThumbnail, { width: 100, height: 100 }))),
                React.createElement("div", { className: "order-item-info" },
                    React.createElement("div", { className: "order-item-name font-semibold" }, item.productName),
                    React.createElement("div", { className: "order-item-sku italic" },
                        _('Sku'),
                        ": #",
                        item.productSku),
                    React.createElement("div", { className: "order-item-qty", style: { fontSize: '0.9em' } },
                        item.qty,
                        " x ",
                        item.productPrice.text)))))),
            React.createElement("div", { className: "order-total col-span-1" },
                React.createElement("div", { className: "order-header" },
                    React.createElement("div", { className: "order-number" },
                        React.createElement("span", { className: "font-bold" },
                            _('Order'),
                            ": #",
                            order.orderNumber),
                        React.createElement("span", { className: "italic pl-4" }, order.createdAt.text))),
                React.createElement("div", { className: "order-total-value font-bold" },
                    _('Total'),
                    ":",
                    order.grandTotal.text)))));
}
Order.propTypes = {
    order: PropTypes.shape({
        createdAt: PropTypes.shape({
            text: PropTypes.string.isRequired
        }),
        grandTotal: PropTypes.shape({
            text: PropTypes.string.isRequired
        }),
        items: PropTypes.arrayOf(PropTypes.shape({
            productPrice: PropTypes.shape({
                text: PropTypes.string.isRequired
            }),
            productSku: PropTypes.string.isRequired,
            productName: PropTypes.string.isRequired,
            thumbnail: PropTypes.string,
            qty: PropTypes.number.isRequired
        })),
        orderNumber: PropTypes.string.isRequired
    }).isRequired
};
//# sourceMappingURL=Order.js.map