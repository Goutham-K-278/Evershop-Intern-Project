import PropTypes from 'prop-types';
import React from 'react';
export default function NameRow({ id, editUrl, areaProps: { row } }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("a", { className: "hover:underline font-semibold", href: row[editUrl] }, row[id]))));
}
NameRow.propTypes = {
    editUrl: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    areaProps: PropTypes.shape({
        row: PropTypes.shape({})
    }).isRequired
};
//# sourceMappingURL=NameRow.js.map