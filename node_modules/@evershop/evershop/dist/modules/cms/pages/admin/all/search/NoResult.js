import Dot from '@components/common/Dot';
import PropTypes from 'prop-types';
import React from 'react';
export function NoResult({ keyword, resourseLinks = [] }) {
    return (React.createElement("div", { className: "no-result items-center text-center" },
        React.createElement("h3", null,
            "No results for \"",
            keyword,
            "\""),
        React.createElement("div", null, "TRY OTHER RESOURCES"),
        React.createElement("div", { className: "grid grid-cols-2 mt-4" }, resourseLinks.map((link, index) => (React.createElement("div", { key: index, className: "flex space-x-4 justify-center items-center" },
            React.createElement(Dot, { variant: "info" }),
            React.createElement("a", { href: link.url, className: "text-divider hover:underline" }, link.name)))))));
}
NoResult.propTypes = {
    keyword: PropTypes.string,
    resourseLinks: PropTypes.arrayOf(PropTypes.shape({
        url: PropTypes.string,
        name: PropTypes.string
    }))
};
NoResult.defaultProps = {
    keyword: '',
    resourseLinks: undefined
};
//# sourceMappingURL=NoResult.js.map