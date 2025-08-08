import PropTypes from 'prop-types';
import React from 'react';
import './CKEditor.scss';
export function CKEditor({ content }) {
    return (React.createElement("div", { className: "ck-content" },
        React.createElement("div", { dangerouslySetInnerHTML: { __html: content } })));
}
CKEditor.propTypes = {
    content: PropTypes.string
};
CKEditor.defaultProps = {
    content: ''
};
//# sourceMappingURL=CKEditor.js.map