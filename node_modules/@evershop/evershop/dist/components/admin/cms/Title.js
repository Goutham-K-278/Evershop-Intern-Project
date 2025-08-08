import PropTypes from 'prop-types';
import React from 'react';
export default function Title({ title }) {
    return React.createElement("h3", { className: "page-title" }, title);
}
Title.propTypes = {
    title: PropTypes.string.isRequired
};
//# sourceMappingURL=Title.js.map