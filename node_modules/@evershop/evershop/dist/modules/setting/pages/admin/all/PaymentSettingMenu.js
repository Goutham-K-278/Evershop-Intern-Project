import { Card } from '@components/admin/cms/Card';
import PropTypes from 'prop-types';
import React from 'react';
export default function PaymentSettingMenu({ paymentSettingUrl }) {
    return (React.createElement(Card.Session, { title: React.createElement("a", { href: paymentSettingUrl }, "Payment Setting") },
        React.createElement("div", null, "Configure the available payment methods")));
}
PaymentSettingMenu.propTypes = {
    paymentSettingUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'settingPageMenu',
    sortOrder: 10
};
export const query = `
  query Query {
    paymentSettingUrl: url(routeId: "paymentSetting")
  }
`;
//# sourceMappingURL=PaymentSettingMenu.js.map