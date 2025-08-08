import PropTypes from 'prop-types';
import React from 'react';
export default function TotalRow({ total }) {
    return React.createElement("td", null, total);
}
TotalRow.propTypes = {
    total: PropTypes.string.isRequired
};
//# sourceMappingURL=TotalRow.js.map