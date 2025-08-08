import Area from '@components/common/Area';
import { useAppState } from '@components/common/context/app';
import { Empty } from '@components/frontStore/checkout/cart/Empty';
import Items from '@components/frontStore/checkout/cart/items/Items';
import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../lib/locale/translate/_.js';
import { get } from '../../../../../lib/util/get.js';
function Title({ title }) {
    const items = get(useAppState(), 'cart.items', []);
    if (items.length <= 0)
        return null;
    return (React.createElement("div", { className: "mb-12 text-center shopping-cart-heading" },
        React.createElement("h1", { className: "shopping-cart-title mb-2" }, title),
        React.createElement("a", { href: "/", className: "underline" }, _('Continue Shopping'))));
}
Title.propTypes = {
    title: PropTypes.string.isRequired
};
export default function ShoppingCart({ cart, setting }) {
    const { totalQty = 0, items = [] } = cart || {};
    if (totalQty <= 0) {
        return React.createElement(Empty, null);
    }
    else {
        return (React.createElement("div", null,
            React.createElement("div", { className: "cart page-width" },
                React.createElement(Area, { id: "shoppingCartTop", className: "cart-page-top", coreComponents: [
                        {
                            component: { default: Title },
                            props: { title: 'Shopping cart' },
                            sortOrder: 10,
                            id: 'shoppingCartTitle'
                        }
                    ] }),
                React.createElement("div", { className: "cart-page-middle" },
                    React.createElement("div", { className: "grid gap-16 grid-cols-1 md:grid-cols-4" },
                        React.createElement(Area, { id: "shoppingCartLeft", className: "col-span-1 md:col-span-3", coreComponents: [
                                {
                                    component: { default: Items },
                                    props: { items, setting },
                                    sortOrder: 10,
                                    id: 'shoppingCartTitle'
                                }
                            ] }),
                        React.createElement(Area, { id: "shoppingCartRight", className: "col-span-1 md:col-span-1" }))),
                React.createElement(Area, { id: "shoppingCartBottom", className: "cart-page-bottom" }))));
    }
}
ShoppingCart.propTypes = {
    cart: PropTypes.shape({
        uuid: PropTypes.string.isRequired
    }).isRequired,
    setting: PropTypes.shape({
        priceIncludingTax: PropTypes.bool
    }).isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    cart {
      totalQty
      uuid
      items {
        cartItemId
        thumbnail
        qty
        productName
        productSku
        variantOptions
        productUrl
        productPrice {
          value
          text
        }
        productPriceInclTax {
          value
          text
        }
        finalPrice {
          value
          text
        }
        finalPriceInclTax {
          value
          text
        }
        lineTotal {
          value
          text
        }
        lineTotal {
          value
          text
        }
        lineTotalInclTax {
          value
          text
        }
        lineTotalInclTax {
          value
          text
        }
        removeApi
        updateQtyApi
        errors
      }
    }
    setting {
      priceIncludingTax
    }
  }
`;
//# sourceMappingURL=ShoppingCart.js.map