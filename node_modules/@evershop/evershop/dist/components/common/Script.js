import PropTypes from 'prop-types';
import React from 'react';
export default function Script({ src, isAsync = false }) {
    return src === undefined ? null : React.createElement("script", { src: src, async: isAsync });
}
Script.propTypes = {
    isAsync: PropTypes.bool,
    src: PropTypes.string.isRequired
};
Script.defaultProps = {
    isAsync: false
};
//# sourceMappingURL=Script.js.map