import { Card } from '@components/admin/cms/Card';
import PropTypes from 'prop-types';
import React from 'react';
export default function TaxSettingMenu({ taxSettingUrl }) {
    return (React.createElement(Card.Session, { title: React.createElement("a", { href: taxSettingUrl }, "Tax Setting") },
        React.createElement("div", null, "Configure tax classes and tax rates")));
}
TaxSettingMenu.propTypes = {
    taxSettingUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'settingPageMenu',
    sortOrder: 20
};
export const query = `
  query Query {
    taxSettingUrl: url(routeId: "taxSetting")
  }
`;
//# sourceMappingURL=TaxSettingMenu.js.map