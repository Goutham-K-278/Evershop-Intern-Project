import PropTypes from 'prop-types';
import React from 'react';
export default function PageName({ url, name }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("a", { className: "hover:underline font-semibold", href: url }, name))));
}
PageName.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
};
//# sourceMappingURL=PageName.js.map