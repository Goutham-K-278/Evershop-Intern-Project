import PropTypes from 'prop-types';
import React from 'react';
export function Total({ total }) {
    return (React.createElement("div", { className: "summary-row" },
        React.createElement("span", null, "Total"),
        React.createElement("div", null,
            React.createElement("span", null),
            React.createElement("div", null, total))));
}
Total.propTypes = {
    total: PropTypes.string.isRequired
};
//# sourceMappingURL=Total.js.map