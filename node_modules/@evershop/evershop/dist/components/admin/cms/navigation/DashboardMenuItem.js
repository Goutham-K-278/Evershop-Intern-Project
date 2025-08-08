import { NavigationItem } from '@components/admin/cms/NavigationItem';
import Icon from '@heroicons/react/solid/esm/HomeIcon';
import PropTypes from 'prop-types';
import React from 'react';
export default function DashboardMenuItem({ url }) {
    return React.createElement(NavigationItem, { Icon: Icon, title: "Dashboard", url: url });
}
DashboardMenuItem.propTypes = {
    url: PropTypes.string.isRequired
};
//# sourceMappingURL=DashboardMenuItem.js.map