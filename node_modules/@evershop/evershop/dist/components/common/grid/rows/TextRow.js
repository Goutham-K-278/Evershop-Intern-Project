import PropTypes from 'prop-types';
import React from 'react';
export default function TextRow({ text }) {
    return React.createElement("td", null, text);
}
TextRow.propTypes = {
    text: PropTypes.string.isRequired
};
//# sourceMappingURL=TextRow.js.map