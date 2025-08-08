import PropTypes from 'prop-types';
import React from 'react';
export default function CollectionNameRow({ name, url }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("a", { className: "hover:underline font-semibold", href: url }, name))));
}
CollectionNameRow.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
//# sourceMappingURL=CollectionNameRow.js.map