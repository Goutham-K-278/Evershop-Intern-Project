import { Card } from '@components/admin/cms/Card';
import { Field } from '@components/common/form/Field';
import { Toggle } from '@components/common/form/fields/Toggle';
import PropTypes from 'prop-types';
import React from 'react';
export default function StripePayment({ setting: { stripePaymentStatus, stripeDisplayName, stripePublishableKey, stripeSecretKey, stripeEndpointSecret, stripePaymentMode } }) {
    return (React.createElement(Card, { title: "Stripe Payment" },
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Enable?")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Toggle, { name: "stripePaymentStatus", value: stripePaymentStatus })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Dislay Name")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "stripeDisplayName", placeholder: "Dislay Name", value: stripeDisplayName })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Publishable Key")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "stripePublishableKey", placeholder: "Publishable Key", value: stripePublishableKey })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Secret Key")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "stripeSecretKey", placeholder: "Secret Key", value: stripeSecretKey })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Webhook Secret Key")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "stripeEndpointSecret", placeholder: "Secret Key", value: stripeEndpointSecret, instruction: "Your webhook url should be: https://yourdomain.com/api/stripe/webhook" })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Payment mode")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "radio", name: "stripePaymentMode", placeholder: "Payment Mode", value: stripePaymentMode, options: [
                            { text: 'Authorize only', value: 'authorizeOnly' },
                            { text: 'Capture', value: 'capture' }
                        ] }))))));
}
StripePayment.propTypes = {
    setting: PropTypes.shape({
        stripePaymentStatus: PropTypes.number,
        stripeDisplayName: PropTypes.string,
        stripePublishableKey: PropTypes.string,
        stripeSecretKey: PropTypes.string,
        stripeEndpointSecret: PropTypes.string,
        stripePaymentMode: PropTypes.string
    }).isRequired
};
export const layout = {
    areaId: 'paymentSetting',
    sortOrder: 10
};
export const query = `
  query Query {
    setting {
      stripeDisplayName
      stripePaymentStatus
      stripePublishableKey
      stripeSecretKey
      stripeEndpointSecret
      stripePaymentMode
    }
  }
`;
//# sourceMappingURL=StripePayment.js.map