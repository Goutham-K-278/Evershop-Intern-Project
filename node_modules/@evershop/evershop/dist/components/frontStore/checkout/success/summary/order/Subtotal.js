import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../../lib/locale/translate/_.js';
export function Subtotal({ count, total }) {
    return (React.createElement("div", { className: "summary-row" },
        React.createElement("span", null, _('Sub total')),
        React.createElement("div", null,
            React.createElement("div", null, _('${count} items', { count })),
            React.createElement("div", null, total))));
}
Subtotal.propTypes = {
    count: PropTypes.number.isRequired,
    total: PropTypes.string.isRequired
};
//# sourceMappingURL=Subtotal.js.map