import Area from '@components/common/Area';
import Button from '@components/common/form/Button';
import { Tax } from '@components/frontStore/checkout/checkout/summary/cart/Tax';
import { Total } from '@components/frontStore/checkout/checkout/summary/cart/Total';
import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../lib/locale/translate/_.js';
function Subtotal({ subTotal }) {
    return (React.createElement("div", { className: "flex justify-between gap-12" },
        React.createElement("div", null, _('Sub total')),
        React.createElement("div", { className: "text-right" }, subTotal.text)));
}
Subtotal.propTypes = {
    subTotal: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string
    })
};
Subtotal.defaultProps = {
    subTotal: {
        value: 0,
        text: ''
    }
};
function Discount({ discountAmount, coupon }) {
    if (!coupon) {
        return null;
    }
    return (React.createElement("div", { className: "flex justify-between gap-12" },
        React.createElement("div", null, _('Discount(${coupon})', { coupon })),
        React.createElement("div", { className: "text-right" }, discountAmount.text)));
}
Discount.propTypes = {
    discountAmount: PropTypes.shape({
        value: PropTypes.number,
        text: PropTypes.string
    }),
    coupon: PropTypes.string
};
Discount.defaultProps = {
    discountAmount: {
        value: 0,
        text: ''
    },
    coupon: ''
};
function Summary({ checkoutUrl, cart: { totalQty, subTotal, subTotalInclTax, totalTaxAmount, grandTotal, coupon, discountAmount }, setting: { priceIncludingTax } }) {
    if (totalQty === undefined || totalQty <= 0) {
        return null;
    }
    return (React.createElement("div", { className: "summary" },
        React.createElement("div", { className: "grid grid-cols-1 gap-8" },
            React.createElement("h4", null, _('Order summary')),
            React.createElement(Area, { id: "shoppingCartSummary", noOuter: true, coreComponents: [
                    {
                        component: { default: Subtotal },
                        props: {
                            subTotal: priceIncludingTax ? subTotalInclTax : subTotal
                        },
                        sortOrder: 10,
                        id: 'shoppingCartSubtotal'
                    },
                    {
                        component: { default: Discount },
                        props: { discountAmount, coupon },
                        sortOrder: 20,
                        id: 'shoppingCartDiscount'
                    },
                    {
                        component: {
                            default: priceIncludingTax ? () => null : Tax
                        },
                        props: {
                            amount: totalTaxAmount.text
                        },
                        sortOrder: 30,
                        id: 'tax'
                    },
                    {
                        component: {
                            default: Total
                        },
                        props: {
                            total: grandTotal.text,
                            totalTaxAmount: totalTaxAmount.text,
                            priceIncludingTax
                        },
                        sortOrder: 30,
                        id: 'tax'
                    }
                ] })),
        React.createElement("div", { className: "shopping-cart-checkout-btn flex justify-between mt-8" },
            React.createElement(Button, { url: checkoutUrl, title: _('CHECKOUT'), variant: "primary" }))));
}
Summary.propTypes = {
    checkoutUrl: PropTypes.string.isRequired,
    cart: PropTypes.shape({
        totalQty: PropTypes.number,
        subTotal: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        subTotalInclTax: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        totalTaxAmount: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        discountAmount: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }),
        coupon: PropTypes.string,
        grandTotal: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        })
    }).isRequired,
    setting: PropTypes.shape({
        priceIncludingTax: PropTypes.bool
    }).isRequired
};
export default Summary;
export const layout = {
    areaId: 'shoppingCartRight',
    sortOrder: 10
};
export const query = `
  query Query {
    cart(id: getContextValue('cartId', null)) {
      totalQty
      subTotal {
        value
        text
      }
      subTotalInclTax {
        value
        text
      }
      grandTotal {
        value
        text
      }
      
      totalTaxAmount {
        value
        text
      }
      discountAmount {
        value
        text
      }
      coupon
    }
    setting {
      priceIncludingTax
    }
    checkoutUrl: url(routeId: "checkout")
  }
`;
//# sourceMappingURL=Summary.js.map