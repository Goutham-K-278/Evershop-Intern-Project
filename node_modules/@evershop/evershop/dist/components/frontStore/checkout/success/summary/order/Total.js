import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../../lib/locale/translate/_.js';
export function Total({ total, totalTaxAmount, priceIncludingTax }) {
    return (React.createElement("div", { className: "summary-row grand-total" },
        (priceIncludingTax && (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("div", { className: "font-bold" },
                    React.createElement("span", null, _('Total'))),
                React.createElement("div", null,
                    React.createElement("span", { className: "italic" },
                        "(",
                        _('Inclusive of tax ${totalTaxAmount}', { totalTaxAmount }),
                        ")")))))) || React.createElement("span", { className: "self-center font-bold" }, _('Total')),
        React.createElement("div", null,
            React.createElement("div", null),
            React.createElement("div", { className: "grand-total-value" }, total))));
}
Total.propTypes = {
    total: PropTypes.string.isRequired,
    totalTaxAmount: PropTypes.string.isRequired,
    priceIncludingTax: PropTypes.bool.isRequired
};
//# sourceMappingURL=Total.js.map