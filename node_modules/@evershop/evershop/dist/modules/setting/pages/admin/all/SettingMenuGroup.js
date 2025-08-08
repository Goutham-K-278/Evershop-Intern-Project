import { NavigationItemGroup } from '@components/admin/cms/NavigationItemGroup';
import CogIcon from '@heroicons/react/solid/esm/CogIcon';
import PropTypes from 'prop-types';
import React from 'react';
export default function CmsMenuGroup({ storeSetting }) {
    return (React.createElement(NavigationItemGroup, { id: "settingMenuGroup", name: "Setting", Icon: () => React.createElement(CogIcon, { width: 15, height: 15 }), url: storeSetting }));
}
CmsMenuGroup.propTypes = {
    storeSetting: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'adminMenu',
    sortOrder: 500
};
export const query = `
  query Query {
    storeSetting: url(routeId:"storeSetting")
  }
`;
//# sourceMappingURL=SettingMenuGroup.js.map