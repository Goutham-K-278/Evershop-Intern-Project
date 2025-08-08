import { Card } from '@components/admin/cms/Card';
import { AddressSummary } from '@components/common/customer/address/AddressSummary';
import PropTypes from 'prop-types';
import React from 'react';
export default function Customer({ order: { shippingAddress, billingAddress, customerFullName, customerEmail, customerUrl } }) {
    return (React.createElement(Card, { title: "Customer" },
        React.createElement(Card.Session, null,
            customerUrl && (React.createElement("a", { href: customerUrl, className: "text-interactive hover:underline block" }, customerFullName)),
            !customerUrl && React.createElement("span", null,
                customerEmail,
                " (Guest Checkout)")),
        React.createElement(Card.Session, { title: "Contact information" },
            React.createElement("div", null,
                React.createElement("a", { href: "#", className: "text-interactive hover:underline" }, customerEmail)),
            React.createElement("div", null,
                React.createElement("span", null, shippingAddress.telephone))),
        React.createElement(Card.Session, { title: "Shipping Address" },
            React.createElement(AddressSummary, { address: shippingAddress })),
        React.createElement(Card.Session, { title: "Billing address" },
            React.createElement(AddressSummary, { address: billingAddress }))));
}
Customer.propTypes = {
    order: PropTypes.shape({
        customerFullName: PropTypes.string.isRequired,
        customerEmail: PropTypes.string.isRequired,
        customerUrl: PropTypes.string,
        shippingAddress: PropTypes.shape({
            fullName: PropTypes.string.isRequired,
            address1: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            postcode: PropTypes.string.isRequired,
            telephone: PropTypes.string.isRequired,
            province: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            }).isRequired,
            country: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        billingAddress: PropTypes.shape({
            fullName: PropTypes.string.isRequired,
            address1: PropTypes.string.isRequired,
            city: PropTypes.string.isRequired,
            postcode: PropTypes.string.isRequired,
            telephone: PropTypes.string.isRequired,
            province: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            }).isRequired,
            country: PropTypes.shape({
                code: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 15
};
export const query = `
  query Query {
    order(uuid: getContextValue("orderId")) {
      customerFullName
      customerEmail
      customerUrl
      shippingAddress {
        fullName
        city
        address1
        address2
        postcode
        telephone
        province {
          code
          name
        }
        country {
          code
          name
        }
      }
      billingAddress {
        fullName
        city
        address1
        address2
        postcode
        telephone
        province {
          code
          name
        }
        country {
          code
          name
        }
      }
    }
  }
`;
//# sourceMappingURL=Customer.js.map