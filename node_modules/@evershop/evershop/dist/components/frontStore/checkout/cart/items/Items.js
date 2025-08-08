import { useAppDispatch } from '@components/common/context/app';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { _ } from '../../../../../lib/locale/translate/_.js';
import { ItemOptions } from './ItemOptions';
import { ItemVariantOptions } from './ItemVariantOptions';
import './Items.scss';
import Quantity from './Quantity';
function Items({ items, setting: { priceIncludingTax } }) {
    const AppContextDispatch = useAppDispatch();
    const removeItem = async (item) => {
        const response = await fetch(item.removeApi, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            const currentUrl = window.location.href;
            const url = new URL(currentUrl, window.location.origin);
            url.searchParams.set('ajax', true);
            await AppContextDispatch.fetchPageData(url);
        }
        else {
            // TODO: display message
            const data = await response.json();
            toast(data.error.message);
        }
    };
    return (React.createElement("div", { id: "shopping-cart-items" },
        React.createElement("table", { className: "items-table listing" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("td", null,
                        React.createElement("span", null, _('Product'))),
                    React.createElement("td", null,
                        React.createElement("span", null, _('Price'))),
                    React.createElement("td", { className: "hidden md:table-cell" },
                        React.createElement("span", null, _('Quantity'))),
                    React.createElement("td", { className: "hidden md:table-cell" },
                        React.createElement("span", null, _('Total'))))),
            React.createElement("tbody", null, items.map((item) => (React.createElement("tr", { key: item.cartItemId },
                React.createElement("td", null,
                    React.createElement("div", { className: "flex justify-start space-x-4 product-info" },
                        React.createElement("div", { className: "product-image flex justify-center items-center" },
                            item.thumbnail && (React.createElement("img", { className: "self-center", src: item.thumbnail, alt: item.productName })),
                            !item.thumbnail && (React.createElement(ProductNoThumbnail, { width: 40, height: 40 }))),
                        React.createElement("div", { className: "cart-tem-info" },
                            React.createElement("a", { href: item.productUrl, className: "name font-semibold hover:underline" }, item.productName),
                            item.errors.map((e, i) => (React.createElement("div", { className: "text-critical", key: i }, e))),
                            React.createElement(ItemOptions, { options: JSON.parse(item.productCustomOptions || '[]') }),
                            React.createElement(ItemVariantOptions, { options: JSON.parse(item.variantOptions || '[]') }),
                            React.createElement("div", { className: "mt-2" },
                                React.createElement("a", { onClick: async (e) => {
                                        e.preventDefault();
                                        await removeItem(item);
                                    }, href: "#", className: "text-textSubdued underline" },
                                    React.createElement("span", null, _('Remove'))))))),
                React.createElement("td", null,
                    item.finalPrice.value < item.productPrice.value && (React.createElement("div", null,
                        React.createElement("span", { className: "regular-price" }, priceIncludingTax
                            ? item.productPriceInclTax.text
                            : item.productPrice.text),
                        ' ',
                        React.createElement("span", { className: "sale-price" }, priceIncludingTax
                            ? item.finalPriceInclTax.text
                            : item.finalPrice.text))),
                    item.finalPrice.value >= item.productPrice.value && (React.createElement("div", null,
                        React.createElement("span", { className: "sale-price" }, priceIncludingTax
                            ? item.finalPriceInclTax.text
                            : item.finalPrice.text))),
                    React.createElement("div", { className: "md:hidden mt-2 flex justify-end" },
                        React.createElement(Quantity, { qty: item.qty, api: item.updateQtyApi }))),
                React.createElement("td", { className: "hidden md:table-cell" },
                    React.createElement(Quantity, { qty: item.qty, api: item.updateQtyApi })),
                React.createElement("td", { className: "hidden md:table-cell" },
                    React.createElement("span", null, priceIncludingTax
                        ? item.lineTotalInclTax.text
                        : item.lineTotal.text)))))))));
}
Items.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        thumbnail: PropTypes.string,
        productName: PropTypes.string,
        productUrl: PropTypes.string,
        productCustomOptions: PropTypes.string,
        variantOptions: PropTypes.string,
        finalPrice: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        finalPriceInclTax: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        productPrice: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        productPriceInclTax: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        qty: PropTypes.number,
        lineTotalInclTax: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        lineTotal: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        removeApi: PropTypes.string,
        updateQtyApi: PropTypes.string
    })).isRequired,
    setting: PropTypes.shape({
        priceIncludingTax: PropTypes.bool
    }).isRequired
};
export default Items;
//# sourceMappingURL=Items.js.map