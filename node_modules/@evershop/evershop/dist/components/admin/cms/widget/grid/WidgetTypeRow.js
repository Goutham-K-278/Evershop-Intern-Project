import PropTypes from 'prop-types';
import React from 'react';
export default function WidgetTypeRow({ code, types }) {
    const type = types.find((t) => t.code === code);
    if (!type) {
        return (React.createElement("td", null,
            React.createElement("div", null, "Unknown")));
    }
    else {
        return (React.createElement("td", null,
            React.createElement("div", null, type.name)));
    }
}
WidgetTypeRow.propTypes = {
    code: PropTypes.string.isRequired,
    types: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })).isRequired
};
//# sourceMappingURL=WidgetTypeRow.js.map