import { Card } from '@components/admin/cms/Card';
import Area from '@components/common/Area';
import PropTypes from 'prop-types';
import React from 'react';
function Status({ status }) {
    return (React.createElement("td", null,
        React.createElement("span", { className: `badge badge-${status.badge}` },
            " ",
            status.name)));
}
Status.propTypes = {
    status: PropTypes.shape({
        badge: PropTypes.string,
        name: PropTypes.string
    }).isRequired
};
function Note({ note }) {
    return (React.createElement("td", null,
        React.createElement("i", null, note)));
}
Note.propTypes = {
    note: PropTypes.string
};
Note.defaultProps = {
    note: ''
};
function Weight({ weight }) {
    return React.createElement("td", null, weight.text);
}
Weight.propTypes = {
    weight: PropTypes.shape({
        text: PropTypes.string
    }).isRequired
};
function Actions({ status, startShipUrl, completeShipUrl }) {
    const startShipment = (e) => {
        e.preventDefault();
        fetch(startShipUrl, false, 'GET', {}, null, () => {
            location.reload();
        });
    };
    const completeShipment = (e) => {
        e.preventDefault();
        fetch(completeShipUrl, false, 'GET', {}, null, () => {
            location.reload();
        });
    };
    return (React.createElement("td", null,
        status === 'pending' && (React.createElement("a", { href: "#", onClick: (e) => startShipment(e) },
            React.createElement("span", null, "Start shipment"))),
        status === 'delivering' && (React.createElement("a", { href: "#", onClick: (e) => completeShipment(e) },
            React.createElement("span", null, "Complete shipment")))));
}
Actions.propTypes = {
    completeShipUrl: PropTypes.string.isRequired,
    startShipUrl: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
};
export default function Shipment({ order: { orderId, shippingNote, shippingMethod, shippingMethodName, shipmentStatus, totalWeight, grandTotal }, startShipUrl, completeShipUrl }) {
    return (React.createElement(Card, { title: "Shipment" },
        React.createElement(Card.Session, null,
            React.createElement("table", { className: "table table-bordered" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement(Area, { id: "orderShipmentBlockInfoHeader", orderId: orderId, method: shippingMethod, shippingNote: shippingNote, methodName: shippingMethodName, grandTotal: grandTotal, weight: totalWeight, status: shipmentStatus, noOuter: true, coreComponents: [
                                {
                                    component: { default: 'th' },
                                    props: { children: React.createElement("span", null, "Status") },
                                    sortOrder: 10,
                                    id: 'shipment_status_header'
                                },
                                {
                                    component: { default: 'th' },
                                    props: { children: React.createElement("span", null, "Method") },
                                    sortOrder: 20,
                                    id: 'shipment_method_header'
                                },
                                {
                                    component: { default: 'th' },
                                    props: { children: React.createElement("span", null, "Total weight") },
                                    sortOrder: 30,
                                    id: 'shipment_weight_header'
                                },
                                {
                                    component: { default: 'th' },
                                    props: { children: React.createElement("span", null, "Customer notes") },
                                    sortOrder: 40,
                                    id: 'shipment_notes_header'
                                },
                                {
                                    component: { default: 'th' },
                                    props: { children: React.createElement("span", null, "Actions") },
                                    sortOrder: 50,
                                    id: 'shipment_action_header'
                                }
                            ] }))),
                React.createElement("tbody", null,
                    React.createElement("tr", null,
                        React.createElement(Area, { id: "orderShipmentInfoRow", orderId: orderId, method: shippingMethod, shippingNote: shippingNote, methodName: shippingMethodName, grandTotal: grandTotal, weight: totalWeight, status: shipmentStatus, noOuter: true, coreComponents: [
                                {
                                    component: { default: Status },
                                    props: { status: shipmentStatus },
                                    sortOrder: 10,
                                    id: 'order_shipment_status'
                                },
                                {
                                    component: { default: 'td' },
                                    props: { children: React.createElement("span", null, shippingMethodName) },
                                    sortOrder: 20,
                                    id: 'order_shipment_method'
                                },
                                {
                                    component: { default: Weight },
                                    props: { weight: totalWeight },
                                    sortOrder: 30,
                                    id: 'order_shipment_weight'
                                },
                                {
                                    component: { default: Note },
                                    props: { note: shippingNote },
                                    sortOrder: 40,
                                    id: 'order_shipment_note'
                                },
                                {
                                    component: { default: Actions },
                                    props: {
                                        status: shipmentStatus,
                                        startShipUrl,
                                        completeShipUrl
                                    },
                                    sortOrder: 50,
                                    id: 'order_shipment_action'
                                }
                            ] })))))));
}
Shipment.propTypes = {
    completeShipUrl: PropTypes.string.isRequired,
    startShipUrl: PropTypes.string.isRequired,
    order: PropTypes.shape({
        orderId: PropTypes.string,
        shippingNote: PropTypes.string,
        shippingMethod: PropTypes.string,
        shippingMethodName: PropTypes.string,
        shipmentStatus: PropTypes.string,
        totalWeight: PropTypes.shape({
            text: PropTypes.string
        }),
        grandTotal: PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        })
    }).isRequired
};
export const layout = `
  query Query {
    order(uuid: getContextValue("orderId")) {
      orderId
      shippingNote
      shippingMethod
      shippingMethodName
      shipmentStatus
      totalWeight
      grandTotal {
        value
        text
      }
    }
    shipmentStatusList
    startShipUrl: url(routeId: )
    completeShipUrl
  }
`;
//# sourceMappingURL=Shipment.js.map