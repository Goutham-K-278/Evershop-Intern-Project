import PropTypes from 'prop-types';
import React from 'react';
export default function QtyRow({ qty }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("span", null, qty))));
}
QtyRow.propTypes = {
    qty: PropTypes.number.isRequired
};
//# sourceMappingURL=QtyRow.js.map