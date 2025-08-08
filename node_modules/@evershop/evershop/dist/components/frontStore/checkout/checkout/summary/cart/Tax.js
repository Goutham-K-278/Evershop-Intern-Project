import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../../lib/locale/translate/_.js';
export function Tax({ amount }) {
    return (React.createElement("div", { className: "summary-row flex justify-between" },
        React.createElement("span", null, _('Tax')),
        React.createElement("div", null,
            React.createElement("div", null),
            React.createElement("div", null, amount))));
}
Tax.propTypes = {
    amount: PropTypes.string
};
Tax.defaultProps = {
    amount: undefined
};
//# sourceMappingURL=Tax.js.map