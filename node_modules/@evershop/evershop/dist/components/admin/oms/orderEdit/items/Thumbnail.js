import PropTypes from 'prop-types';
import React from 'react';
export function Thumbnail({ imageUrl, qty }) {
    return (React.createElement("td", null,
        React.createElement("div", { className: "product-thumbnail" },
            React.createElement("div", { className: "thumbnail" },
                imageUrl && React.createElement("img", { src: imageUrl, alt: "" }),
                !imageUrl && (React.createElement("svg", { style: { width: '2rem' }, fill: "currentcolor", viewBox: "0 0 20 20", focusable: "false", "aria-hidden": "true" },
                    React.createElement("path", { fillRule: "evenodd", d: "M6 11h8V9H6v2zm0 4h8v-2H6v2zm0-8h4V5H6v2zm6-5H5.5A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h9a1.5 1.5 0 0 0 1.5-1.5V6l-4-4z" })))),
            React.createElement("span", { className: "qty" }, qty))));
}
Thumbnail.propTypes = {
    imageUrl: PropTypes.string,
    qty: PropTypes.number.isRequired
};
Thumbnail.defaultProps = {
    imageUrl: undefined
};
//# sourceMappingURL=Thumbnail.js.map