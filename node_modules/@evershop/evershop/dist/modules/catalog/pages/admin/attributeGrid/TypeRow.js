import PropTypes from 'prop-types';
import React from 'react';
export default function TypeRow({ id, areaProps: { row } }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("span", { style: { textTransform: 'capitalize' } }, row[id]))));
}
TypeRow.propTypes = {
    areaProps: PropTypes.shape({
        row: PropTypes.shape({
            id: PropTypes.string
        })
    }).isRequired,
    id: PropTypes.string.isRequired
};
//# sourceMappingURL=TypeRow.js.map