import Badge from '@components/common/Badge';
import PropTypes from 'prop-types';
import React from 'react';
export default function PaymentStatusRow({ status }) {
    return (React.createElement("td", null,
        React.createElement(Badge, { title: status.name, variant: status.badge, progress: status.progress })));
}
PaymentStatusRow.propTypes = {
    status: PropTypes.shape({
        name: PropTypes.string.isRequired,
        badge: PropTypes.string.isRequired,
        progress: PropTypes.string.isRequired
    }).isRequired
};
//# sourceMappingURL=PaymentStatus.js.map