import { Card } from '@components/admin/cms/Card';
import { Field } from '@components/common/form/Field';
import { Toggle } from '@components/common/form/fields/Toggle';
import PropTypes from 'prop-types';
import React from 'react';
export default function PaypalPayment({ setting: { paypalPaymentStatus, paypalDisplayName, paypalClientId, paypalClientSecret, paypalEnvironment, paypalPaymentIntent } }) {
    return (React.createElement(Card, { title: "Paypal Payment" },
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Enable?")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Toggle, { name: "paypalPaymentStatus", value: paypalPaymentStatus })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Dislay Name")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "paypalDisplayName", placeholder: "Dislay Name", value: paypalDisplayName })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Client ID")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "paypalClientId", placeholder: "Client ID", value: paypalClientId })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Client Secret")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "paypalClientSecret", placeholder: "Secret Key", value: paypalClientSecret })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Environment")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "radio", name: "paypalEnvironment", placeholder: "Environment", value: paypalEnvironment, options: [
                            {
                                text: 'Sandbox',
                                value: 'https://api-m.sandbox.paypal.com'
                            },
                            {
                                text: 'Live',
                                value: 'https://api-m.paypal.com'
                            }
                        ] })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Payment mode")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "radio", name: "paypalPaymentIntent", placeholder: "Payment Mode", value: paypalPaymentIntent, options: [
                            { text: 'Authorize only', value: 'AUTHORIZE' },
                            { text: 'Capture', value: 'CAPTURE' }
                        ] }))))));
}
PaypalPayment.propTypes = {
    setting: PropTypes.shape({
        paypalPaymentStatus: PropTypes.number,
        paypalDisplayName: PropTypes.string,
        paypalClientId: PropTypes.string,
        paypalClientSecret: PropTypes.string,
        paypalEnvironment: PropTypes.string,
        paypalPaymentIntent: PropTypes.string
    })
};
PaypalPayment.defaultProps = {
    setting: {
        paypalPaymentStatus: 0,
        paypalDisplayName: '',
        paypalClientId: '',
        paypalClientSecret: '',
        paypalEnvironment: '',
        paypalPaymentIntent: 'CAPTURE'
    }
};
export const layout = {
    areaId: 'paymentSetting',
    sortOrder: 15
};
export const query = `
  query Query {
    setting {
      paypalPaymentStatus
      paypalDisplayName
      paypalClientId
      paypalClientSecret
      paypalEnvironment
      paypalPaymentIntent
    }
  }
`;
//# sourceMappingURL=PaypalSetting.js.map