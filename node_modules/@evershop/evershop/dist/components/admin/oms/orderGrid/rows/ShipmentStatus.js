import Badge from '@components/common/Badge';
import PropTypes from 'prop-types';
import React from 'react';
export default function ShipmentStatusRow({ status }) {
    return (React.createElement("td", null,
        React.createElement(Badge, { title: status.name, variant: status.badge, progress: status.progress })));
}
ShipmentStatusRow.propTypes = {
    status: PropTypes.shape({
        name: PropTypes.string.isRequired,
        badge: PropTypes.string.isRequired,
        progress: PropTypes.string.isRequired
    }).isRequired
};
//# sourceMappingURL=ShipmentStatus.js.map