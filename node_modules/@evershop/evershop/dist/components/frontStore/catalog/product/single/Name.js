import PropTypes from 'prop-types';
import React from 'react';
export function Name({ name }) {
    return React.createElement("h1", { className: "product-single-name" }, name);
}
Name.propTypes = {
    name: PropTypes.string.isRequired
};
//# sourceMappingURL=Name.js.map