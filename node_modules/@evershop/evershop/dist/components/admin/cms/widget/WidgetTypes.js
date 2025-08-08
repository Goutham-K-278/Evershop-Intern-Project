import PropTypes from 'prop-types';
import React from 'react';
export default function WidgetTypes({ types }) {
    return (React.createElement("div", { className: "grid grid-cols-3 gap-4" }, types.map((type) => (React.createElement("a", { key: type.code, href: type.createWidgetUrl, className: "border border-gray-200 rounded p-4 text-center" },
        React.createElement("div", { className: "text-lg font-bold" }, type.name))))));
}
WidgetTypes.propTypes = {
    types: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        createWidgetUrl: PropTypes.string.isRequired
    })).isRequired
};
//# sourceMappingURL=WidgetTypes.js.map