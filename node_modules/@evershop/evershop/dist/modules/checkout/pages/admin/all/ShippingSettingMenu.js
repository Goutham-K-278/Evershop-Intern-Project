import { Card } from '@components/admin/cms/Card';
import PropTypes from 'prop-types';
import React from 'react';
export default function ShippingSettingMenu({ shippingSettingUrl }) {
    return (React.createElement(Card.Session, { title: React.createElement("a", { href: shippingSettingUrl }, "Shipping Setting") },
        React.createElement("div", null, "Where you ship, shipping methods and delivery fee")));
}
ShippingSettingMenu.propTypes = {
    shippingSettingUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'settingPageMenu',
    sortOrder: 15
};
export const query = `
  query Query {
    shippingSettingUrl: url(routeId: "shippingSetting")
  }
`;
//# sourceMappingURL=ShippingSettingMenu.js.map