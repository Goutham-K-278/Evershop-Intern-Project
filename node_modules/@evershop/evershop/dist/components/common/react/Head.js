import Area from '@components/common/Area';
import React from 'react';
import ReactDOM from 'react-dom';
export default function Head() {
    return ReactDOM.createPortal(React.createElement(Area, { id: "head", noOuter: true }), document.getElementsByTagName('head')[0]);
}
//# sourceMappingURL=Head.js.map