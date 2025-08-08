import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../../lib/locale/translate/_.js';
export function Shipping({ method, cost }) {
    if (!method) {
        return null;
    }
    return (React.createElement("div", { className: "summary-row" },
        React.createElement("span", null, _('Shipping')),
        React.createElement("div", null,
            React.createElement("div", null, method),
            React.createElement("div", null, cost))));
}
Shipping.propTypes = {
    cost: PropTypes.string,
    method: PropTypes.string
};
Shipping.defaultProps = {
    cost: undefined,
    method: undefined
};
//# sourceMappingURL=Shipping.js.map