import PropTypes from 'prop-types';
import React from 'react';
export default function ActionColumnHeader({ gridOriginalUrl = undefined }) {
    return (React.createElement("th", { className: "column action-column" },
        React.createElement("div", { className: "table-header" },
            React.createElement("div", { className: "title" },
                React.createElement("span", null)),
            gridOriginalUrl && (React.createElement("div", { className: "filter" },
                React.createElement("a", { className: "text-danger", title: "Clear filter", href: gridOriginalUrl },
                    React.createElement("i", { className: "fa fa-filter" }),
                    React.createElement("i", { className: "fa fa-slash", style: { marginLeft: '-13px' } })))))));
}
ActionColumnHeader.propTypes = {
    gridOriginalUrl: PropTypes.string
};
ActionColumnHeader.defaultProps = {
    gridOriginalUrl: undefined
};
//# sourceMappingURL=Action.js.map