import { useCheckout } from '@components/common/context/checkout';
import CheckoutForm from '@components/frontStore/stripe/checkout/CheckoutForm';
import StripeLogo from '@components/frontStore/stripe/StripeLogo';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PropTypes from 'prop-types';
import React from 'react';
import smallUnit from 'zero-decimal-currencies';
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// loadStripe is initialized with your real test publishable API key.
let stripe;
const stripeLoader = (publishKey) => {
    if (!stripe) {
        stripe = loadStripe(publishKey);
    }
    return stripe;
};
function StripeApp({ total, currency, stripePublishableKey, returnUrl, createPaymentIntentApi, stripePaymentMode }) {
    const options = {
        mode: 'payment',
        currency: currency.toLowerCase(),
        amount: Number(smallUnit(total, currency)),
        capture_method: stripePaymentMode === 'capture' ? 'automatic_async' : 'manual'
    };
    return (React.createElement("div", { className: "stripe__app" },
        React.createElement(Elements, { stripe: stripeLoader(stripePublishableKey), options: options },
            React.createElement(CheckoutForm, { stripePublishableKey: stripePublishableKey, returnUrl: returnUrl, createPaymentIntentApi: createPaymentIntentApi }))));
}
StripeApp.propTypes = {
    stripePublishableKey: PropTypes.string.isRequired,
    returnUrl: PropTypes.string.isRequired,
    createPaymentIntentApi: PropTypes.string.isRequired,
    stripePaymentMode: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
};
export default function StripeMethod({ setting, cart: { grandTotal, currency }, returnUrl, createPaymentIntentApi }) {
    const checkout = useCheckout();
    const { paymentMethods, setPaymentMethods } = checkout;
    // Get the selected payment method
    const selectedPaymentMethod = paymentMethods
        ? paymentMethods.find((paymentMethod) => paymentMethod.selected)
        : undefined;
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex justify-start items-center gap-4" },
            (!selectedPaymentMethod ||
                selectedPaymentMethod.code !== 'stripe') && (React.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    setPaymentMethods((previous) => previous.map((paymentMethod) => {
                        if (paymentMethod.code === 'stripe') {
                            return {
                                ...paymentMethod,
                                selected: true
                            };
                        }
                        else {
                            return {
                                ...paymentMethod,
                                selected: false
                            };
                        }
                    }));
                } },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-circle" },
                    React.createElement("circle", { cx: "12", cy: "12", r: "10" })))),
            selectedPaymentMethod && selectedPaymentMethod.code === 'stripe' && (React.createElement("div", null,
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "#2c6ecb", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "feather feather-check-circle" },
                    React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
                    React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })))),
            React.createElement("div", null,
                React.createElement(StripeLogo, { width: 100 }))),
        React.createElement("div", null, selectedPaymentMethod && selectedPaymentMethod.code === 'stripe' && (React.createElement("div", { className: "mt-5" },
            React.createElement(StripeApp, { total: grandTotal.value, currency: currency, stripePublishableKey: setting.stripePublishableKey, returnUrl: returnUrl, createPaymentIntentApi: createPaymentIntentApi, stripePaymentMode: setting.stripePaymentMode }))))));
}
StripeMethod.propTypes = {
    setting: PropTypes.shape({
        stripeDisplayName: PropTypes.string.isRequired,
        stripePublishableKey: PropTypes.string.isRequired,
        stripePaymentMode: PropTypes.string.isRequired
    }).isRequired,
    cart: PropTypes.shape({
        grandTotal: PropTypes.shape({
            value: PropTypes.number
        }),
        currency: PropTypes.string
    }).isRequired,
    returnUrl: PropTypes.string.isRequired,
    createPaymentIntentApi: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'checkoutPaymentMethodstripe',
    sortOrder: 10
};
export const query = `
  query Query {
    setting {
      stripeDisplayName
      stripePublishableKey
      stripePaymentMode
    }
    cart {
      grandTotal {
        value
      }
      currency
    }
    returnUrl: url(routeId: "stripeReturn")
    createPaymentIntentApi: url(routeId: "createPaymentIntent")
  }
`;
//# sourceMappingURL=Stripe.js.map