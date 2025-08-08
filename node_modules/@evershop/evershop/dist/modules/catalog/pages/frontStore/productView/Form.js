import Area from '@components/common/Area';
import { useAppDispatch, useAppState } from '@components/common/context/app';
import Button from '@components/common/form/Button';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import ProductNoThumbnail from '@components/common/ProductNoThumbnail';
import produce from 'immer';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { _ } from '../../../../../lib/locale/translate/_.js';
import './Form.scss';
function ToastMessage({ thumbnail, name, qty, count, cartUrl, toastId }) {
    return (React.createElement("div", { className: "toast-mini-cart" },
        React.createElement("div", { className: "top-head grid grid-cols-2" },
            React.createElement("div", { className: "self-center" }, _('JUST ADDED TO YOUR CART')),
            React.createElement("div", { className: "self-center close flex justify-end" },
                React.createElement("a", { href: "#", onClick: (e) => {
                        e.preventDefault();
                        toast.dismiss(toastId);
                    } },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M6 18L18 6M6 6l12 12" }))))),
        React.createElement("div", { className: "item-line flex justify-between" },
            React.createElement("div", { className: "popup-thumbnail flex justify-center items-center" }, thumbnail ? (React.createElement("img", { src: thumbnail, alt: name })) : (React.createElement(ProductNoThumbnail, { width: 25, height: 25 }))),
            React.createElement("div", { className: "item-info flex justify-between" },
                React.createElement("div", { className: "name" },
                    React.createElement("span", { className: "font-bold" }, name)),
                React.createElement("div", null, _('QTY: ${qty}', { qty })))),
        React.createElement("a", { className: "add-cart-popup-button", href: cartUrl }, _('VIEW CART (${count})', { count })),
        React.createElement("a", { className: "add-cart-popup-continue text-center underline block", href: "#", onClick: (e) => {
                e.preventDefault();
                toast.dismiss(toastId);
            } }, _('Continue Shopping'))));
}
ToastMessage.propTypes = {
    cartUrl: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    thumbnail: PropTypes.string,
    toastId: PropTypes.string.isRequired
};
ToastMessage.defaultProps = {
    thumbnail: null
};
function AddToCart({ stockAvaibility, loading = false, error }) {
    return (React.createElement("div", { className: "add-to-cart mt-8" },
        React.createElement("div", { style: { width: '8rem' } },
            React.createElement(Field, { type: "text", value: "1", validationRules: ['notEmpty'], className: "qty", name: "qty", placeholder: _('Qty'), formId: "productForm" })),
        error && React.createElement("div", { className: "text-critical mt-4" }, error),
        React.createElement("div", { className: "mt-4" },
            stockAvaibility === true && (React.createElement(Button, { title: _('ADD TO CART'), outline: true, isLoading: loading, onAction: () => {
                    document
                        .getElementById('productForm')
                        .dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                } })),
            stockAvaibility === false && (React.createElement(Button, { title: _('SOLD OUT'), onAction: () => { } })))));
}
AddToCart.propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    stockAvaibility: PropTypes.bool.isRequired
};
AddToCart.defaultProps = {
    error: undefined
};
export default function ProductForm({ product, action }) {
    const [loading, setLoading] = useState(false);
    const [toastId, setToastId] = useState();
    const [error, setError] = useState();
    const appContext = useAppState();
    const { setData } = useAppDispatch();
    const onSuccess = (response) => {
        if (!response.error) {
            setData(produce(appContext, (draff) => {
                draff.cart = appContext.cart || {};
                draff.cart.totalQty = response.data.count;
                draff.cart.uuid = response.data.cartId;
            }));
            setToastId(toast(React.createElement(ToastMessage, { thumbnail: response.data.item.thumbnail, name: product.name, qty: response.data.item.qty, count: response.data.count, cartUrl: "/cart", toastId: `${toastId}-${Math.random().toString(36).slice(2)}` }), { closeButton: false }));
        }
        else {
            setError(response.error.message);
        }
    };
    return (React.createElement(Form, { id: "productForm", action: action, method: "POST", submitBtn: false, onSuccess: onSuccess, onStart: () => setLoading(true), onComplete: () => setLoading(false), onError: (e) => setError(e.message), isJSON: true },
        React.createElement("input", { type: "hidden", name: "sku", value: product.sku }),
        React.createElement(Area, { id: "productSinglePageForm", coreComponents: [
                {
                    component: { default: AddToCart },
                    props: {
                        stockAvaibility: product.inventory.isInStock,
                        loading,
                        error
                    },
                    sortOrder: 50,
                    id: 'productSingleBuyButton'
                }
            ] })));
}
ProductForm.propTypes = {
    action: PropTypes.string.isRequired,
    product: PropTypes.shape({
        inventory: PropTypes.shape({
            isInStock: PropTypes.bool.isRequired
        }).isRequired,
        name: PropTypes.string.isRequired,
        sku: PropTypes.string.isRequired
    }).isRequired
};
export const layout = {
    areaId: 'productPageMiddleRight',
    sortOrder: 45
};
export const query = `
  query Query {
    product(id: getContextValue('productId')) {
      productId
      sku
      name
      gallery {
        thumb
      }
      inventory {
        isInStock
      }
    }
    action:url (routeId: "addMineCartItem")
  }
`;
//# sourceMappingURL=Form.js.map