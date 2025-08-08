import { Card } from '@components/admin/cms/Card';
import Area from '@components/common/Area';
import PropTypes from 'prop-types';
import React from 'react';
export default function CustomerNotes({ order: { shippingNote } }) {
    return (React.createElement(Card, { title: "Customer notes" },
        React.createElement(Card.Session, null,
            React.createElement(Area, { id: "orderEditCustomerNotes", coreComponents: [
                    {
                        component: {
                            default: () => (React.createElement("div", null, shippingNote || (React.createElement("span", { className: "text-border" }, "No notes from customer"))))
                        },
                        props: {},
                        sortOrder: 10,
                        id: 'title'
                    }
                ], noOuter: true }))));
}
CustomerNotes.propTypes = {
    order: PropTypes.shape({
        shippingNote: PropTypes.string
    }).isRequired
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 10
};
export const query = `
  query Query {
    order(uuid: getContextValue("orderId")) {
      shippingNote
    }
  }
`;
//# sourceMappingURL=CustomerNotes.js.map