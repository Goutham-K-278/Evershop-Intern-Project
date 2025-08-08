import PropTypes from 'prop-types';
import React from 'react';
export default function DummyColumnHeader({ title }) {
    return (React.createElement("th", { className: "column" },
        React.createElement("div", { className: "table-header id-header" },
            React.createElement("div", { className: "font-medium uppercase text-xl" },
                React.createElement("span", null, title)))));
}
DummyColumnHeader.propTypes = {
    title: PropTypes.string.isRequired
};
//# sourceMappingURL=Dummy.js.map