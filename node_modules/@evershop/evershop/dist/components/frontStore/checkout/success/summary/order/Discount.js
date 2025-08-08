import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../../lib/locale/translate/_.js';
export function Discount({ discount, code }) {
    if (!discount) {
        return null;
    }
    return (React.createElement("div", { className: "summary-row" },
        React.createElement("span", null, _('Discount')),
        React.createElement("div", null,
            React.createElement("div", null, code),
            React.createElement("div", null, discount))));
}
Discount.propTypes = {
    code: PropTypes.string,
    discount: PropTypes.string
};
Discount.defaultProps = {
    code: undefined,
    discount: undefined
};
//# sourceMappingURL=Discount.js.map