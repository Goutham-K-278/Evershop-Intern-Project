import Area from '@components/common/Area';
import PropTypes from 'prop-types';
import React from 'react';
import './PageHeading.scss';
function BreadcrumbIcon({ backUrl }) {
    if (!backUrl)
        return null;
    return (React.createElement("a", { href: backUrl, className: "breadcrum-icon border block border-border rounded mr-3" },
        React.createElement("span", { className: "flex items-center justify-center" },
            React.createElement("svg", { className: "text-icon", viewBox: "0 0 20 20", focusable: "false", "aria-hidden": "true" },
                React.createElement("path", { d: "M17 9H5.414l3.293-3.293a.999.999 0 1 0-1.414-1.414l-5 5a.999.999 0 0 0 0 1.414l5 5a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L5.414 11H17a1 1 0 1 0 0-2z" })))));
}
BreadcrumbIcon.propTypes = {
    backUrl: PropTypes.string
};
BreadcrumbIcon.defaultProps = {
    backUrl: undefined
};
function Heading({ heading }) {
    return (React.createElement("div", { className: "self-center" },
        React.createElement("h1", { className: "page-heading-title" }, heading)));
}
Heading.propTypes = {
    heading: PropTypes.string.isRequired
};
function PageHeading({ backUrl, heading }) {
    if (!heading) {
        return null;
    }
    return (React.createElement("div", { className: "page-heading flex justify-between items-center" },
        React.createElement("div", { className: "flex justify-start space-x-4 items-center" },
            React.createElement(Area, { id: "pageHeadingLeft", noOuter: true, coreComponents: [
                    {
                        component: { default: BreadcrumbIcon },
                        props: {
                            backUrl
                        },
                        sortOrder: 0,
                        id: 'breadcrumb'
                    },
                    {
                        component: { default: Heading },
                        props: {
                            heading
                        },
                        sortOrder: 0,
                        id: 'heading'
                    }
                ] })),
        React.createElement("div", { className: "flex justify-end space-x-4 items-center" },
            React.createElement(Area, { id: "pageHeadingRight", noOuter: true, coreComponents: [] }))));
}
PageHeading.propTypes = {
    backUrl: PropTypes.string,
    heading: PropTypes.string.isRequired
};
PageHeading.defaultProps = {
    backUrl: undefined
};
export default PageHeading;
//# sourceMappingURL=PageHeading.js.map