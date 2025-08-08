import { AddressSummary } from '@components/common/customer/address/AddressSummary';
import Button from '@components/common/form/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../lib/locale/translate/_.js';
export default function CustomerInfo({ order: { orderNumber, customerFullName, customerEmail, paymentMethodName, shippingAddress, billingAddress } }) {
    return (React.createElement("div", { className: "checkout-success-customer-info" },
        React.createElement("h3", { className: "thank-you flex justify-start space-x-8" },
            React.createElement("div", { className: "check flex justify-center self-center text-interactive" },
                React.createElement("svg", { style: { width: '3rem', height: '3rem' }, xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M5 13l4 4L19 7" }))),
            React.createElement("div", { className: "self-center" },
                React.createElement("span", { style: { fontSize: '1.6rem', fontWeight: '300' } }, _('Order #${orderNumber}', { orderNumber })),
                React.createElement("div", null, _('Thank you ${name}!', {
                    name: customerFullName || (billingAddress === null || billingAddress === void 0 ? void 0 : billingAddress.fullName)
                })))),
        React.createElement("div", { className: "customer-info mt-12 mb-8" },
            React.createElement("div", { className: "grid grid-cols-2 gap-12" },
                React.createElement("div", null,
                    React.createElement("div", { className: "mb-3" },
                        React.createElement("h3", null, _('Contact information'))),
                    React.createElement("div", { className: "text-textSubdued" }, customerFullName || (billingAddress === null || billingAddress === void 0 ? void 0 : billingAddress.fullName)),
                    React.createElement("div", { className: "text-textSubdued" }, customerEmail)),
                React.createElement("div", null,
                    React.createElement("div", { className: "mb-3" },
                        React.createElement("h3", null, _('Shipping Address'))),
                    React.createElement("div", { className: "text-textSubdued" },
                        React.createElement(AddressSummary, { address: shippingAddress }))),
                React.createElement("div", null,
                    React.createElement("div", { className: "mb-3" },
                        React.createElement("h3", null, _('Payment Method'))),
                    React.createElement("div", { className: "text-textSubdued" }, paymentMethodName)),
                React.createElement("div", null,
                    React.createElement("div", { className: "mb-3" },
                        React.createElement("h3", null, _('Billing Address'))),
                    React.createElement("div", { className: "text-textSubdued" },
                        React.createElement(AddressSummary, { address: billingAddress }))))),
        React.createElement(Button, { url: "/", title: _('CONTINUE SHOPPING') })));
}
CustomerInfo.propTypes = {
    order: PropTypes.shape({
        orderNumber: PropTypes.string.isRequired,
        customerFullName: PropTypes.string,
        customerEmail: PropTypes.string.isRequired,
        paymentMethodName: PropTypes.string.isRequired,
        shippingNote: PropTypes.string,
        shippingAddress: PropTypes.shape({
            fullName: PropTypes.string,
            postcode: PropTypes.string,
            telephone: PropTypes.string,
            country: PropTypes.shape({
                name: PropTypes.string,
                code: PropTypes.string
            }),
            province: PropTypes.shape({
                name: PropTypes.string,
                code: PropTypes.string
            }),
            city: PropTypes.string,
            address1: PropTypes.string,
            address2: PropTypes.string
        }),
        billingAddress: PropTypes.shape({
            fullName: PropTypes.string,
            postcode: PropTypes.string,
            telephone: PropTypes.string,
            country: PropTypes.shape({
                name: PropTypes.string,
                code: PropTypes.string
            }),
            province: PropTypes.shape({
                name: PropTypes.string,
                code: PropTypes.string
            }),
            city: PropTypes.string,
            address1: PropTypes.string,
            address2: PropTypes.string
        })
    }).isRequired
};
export const layout = {
    areaId: 'checkoutSuccessPageLeft',
    sortOrder: 10
};
export const query = `
  query Query {
    order (uuid: getContextValue('orderId')) {
      orderNumber
      customerFullName
      customerEmail
      paymentMethodName
      shippingNote
      shippingAddress {
        fullName
        postcode
        telephone
        country {
          name
          code
        }
        province {
          name
          code
        }
        city
        address1
        address2
      }
      billingAddress {
        fullName
        postcode
        telephone
        country {
          name
          code
        }
        province {
          name
          code
        }
        city
        address1
        address2
      }
    }
  }
`;
//# sourceMappingURL=CustomerInfo.js.map