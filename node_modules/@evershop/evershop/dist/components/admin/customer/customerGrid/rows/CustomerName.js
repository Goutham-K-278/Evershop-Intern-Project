import PropTypes from 'prop-types';
import React from 'react';
export default function CustomerNameRow({ url, name }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("a", { className: "hover:underline font-semibold", href: url }, name))));
}
CustomerNameRow.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
//# sourceMappingURL=CustomerName.js.map