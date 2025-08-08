import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../lib/locale/translate/_.js';
export function Tax({ taxClass, amount }) {
    return (React.createElement("div", { className: "summary-row" },
        React.createElement("span", null, _('Tax')),
        React.createElement("div", null,
            React.createElement("div", null, taxClass),
            React.createElement("div", null, amount))));
}
Tax.propTypes = {
    amount: PropTypes.string.isRequired,
    taxClass: PropTypes.string.isRequired
};
//# sourceMappingURL=Tax.js.map