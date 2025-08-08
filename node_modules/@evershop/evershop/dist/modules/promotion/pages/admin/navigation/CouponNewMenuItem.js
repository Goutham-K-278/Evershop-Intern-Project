import { NavigationItem } from '@components/admin/cms/NavigationItem';
import Icon from '@heroicons/react/solid/esm/GiftIcon';
import PropTypes from 'prop-types';
import React from 'react';
export default function CouponNewMenuItem({ url }) {
    return React.createElement(NavigationItem, { Icon: Icon, title: "New coupon", url: url });
}
CouponNewMenuItem.propTypes = {
    url: PropTypes.string.isRequired
};
//# sourceMappingURL=CouponNewMenuItem.js.map