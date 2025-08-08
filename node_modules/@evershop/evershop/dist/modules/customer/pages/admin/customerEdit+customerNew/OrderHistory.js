import { Card } from '@components/admin/cms/Card';
import PropTypes from 'prop-types';
import React from 'react';
export default function OrderHistory({ customer: { orders = [] } }) {
    return (React.createElement(Card, { title: "Order History" },
        orders.length < 1 && (React.createElement(Card.Session, null,
            React.createElement("div", null, "Customer does not have any order yet."))),
        orders.length > 0 && (React.createElement(React.Fragment, null, orders.map((order) => (React.createElement(Card.Session, { key: order.uuid },
            React.createElement("div", { className: "flex justify-between items-center gap-4" },
                React.createElement("div", null,
                    React.createElement("a", { className: "font-semibold text-interactive", href: order.editUrl },
                        "#",
                        order.orderNumber)),
                React.createElement("div", null,
                    React.createElement("span", null, order.createdAt.text)),
                React.createElement("div", null,
                    React.createElement("span", null, order.paymentStatus.name)),
                React.createElement("div", null,
                    React.createElement("span", null, order.shipmentStatus.name)),
                React.createElement("div", null,
                    React.createElement("span", null, order.grandTotal.text))))))))));
}
OrderHistory.propTypes = {
    customer: PropTypes.shape({
        orders: PropTypes.arrayOf(PropTypes.shape({
            orderNumber: PropTypes.string
        }))
    }).isRequired
};
export const layout = {
    areaId: 'leftSide',
    sortOrder: 10
};
export const query = `
  query Query {
    customer(id: getContextValue("customerUuid", null)) {
      orders {
        orderNumber
        uuid
        editUrl
        createdAt {
          text
        }
        shipmentStatus {
          name
        }
        paymentStatus {
          name
        }
        grandTotal {
          text
        }
      }
    }
  }
`;
//# sourceMappingURL=OrderHistory.js.map