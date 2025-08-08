import { Card } from '@components/admin/cms/Card';
import PropTypes from 'prop-types';
import React from 'react';
export default function StoreSettingMenu({ storeSettingUrl }) {
    return (React.createElement(Card.Session, { title: React.createElement("a", { href: storeSettingUrl }, "Store Setting") },
        React.createElement("div", null, "Configure your store information")));
}
StoreSettingMenu.propTypes = {
    storeSettingUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'settingPageMenu',
    sortOrder: 5
};
export const query = `
  query Query {
    storeSettingUrl: url(routeId: "storeSetting")
  }
`;
//# sourceMappingURL=StoreSettingMenu.js.map