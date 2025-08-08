import PropTypes from 'prop-types';
import React from 'react';
function Name({ name, url }) {
    return (React.createElement("div", { className: "product-name product-list-name mt-4 mb-1" },
        React.createElement("a", { href: url, className: "font-bold hover:underline h5" },
            React.createElement("span", null, name))));
}
Name.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string
};
Name.defaultProps = {
    url: '',
    name: ''
};
export { Name };
//# sourceMappingURL=Name.js.map