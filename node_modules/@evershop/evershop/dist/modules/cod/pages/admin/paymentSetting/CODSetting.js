import { Card } from '@components/admin/cms/Card';
import { Field } from '@components/common/form/Field';
import { Toggle } from '@components/common/form/fields/Toggle';
import PropTypes from 'prop-types';
import React from 'react';
export default function CODPayment({ setting: { codPaymentStatus, codDisplayName } }) {
    return (React.createElement(Card, { title: "Cash On Delivery Payment" },
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Enable?")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Toggle, { name: "codPaymentStatus", value: codPaymentStatus })))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                React.createElement("div", { className: "col-span-1 items-center flex" },
                    React.createElement("h4", null, "Dislay Name")),
                React.createElement("div", { className: "col-span-2" },
                    React.createElement(Field, { type: "text", name: "codDisplayName", placeholder: "Display Name", value: codDisplayName }))))));
}
CODPayment.propTypes = {
    setting: PropTypes.shape({
        codPaymentStatus: PropTypes.number,
        codDisplayName: PropTypes.string
    }).isRequired
};
export const layout = {
    areaId: 'paymentSetting',
    sortOrder: 20
};
export const query = `
  query Query {
    setting {
      codPaymentStatus
      codDisplayName
    }
  }
`;
//# sourceMappingURL=CODSetting.js.map