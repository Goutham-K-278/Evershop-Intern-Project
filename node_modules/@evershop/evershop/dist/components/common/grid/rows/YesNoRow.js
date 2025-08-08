import PropTypes from 'prop-types';
import React from 'react';
export default function YesNoRow({ value }) {
    return (React.createElement("td", null,
        React.createElement("div", { className: "nodejscart-switch" },
            React.createElement("div", null,
                (value === false || parseInt(value, 10) === 0) && React.createElement("span", null, "No"),
                (value === true || parseInt(value, 10) === 1) && React.createElement("span", null, "Yes")))));
}
YesNoRow.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]).isRequired
};
//# sourceMappingURL=YesNoRow.js.map