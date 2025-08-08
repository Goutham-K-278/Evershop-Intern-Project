import Area from '@components/common/Area';
import Button from '@components/common/form/Button';
import PropTypes from 'prop-types';
import React from 'react';
function Name() {
    return (React.createElement("h1", { className: "page-name text-center mt-10 mb-6" }, "404 Page Not Found"));
}
function Content({ dashboardUrl }) {
    return (React.createElement("div", { className: "page-content" },
        React.createElement("div", { className: "text-center" }, "The page you requested does not exist."),
        React.createElement("div", { className: "mt-8 text-center" },
            React.createElement(Button, { title: "Back To Dashboard", url: dashboardUrl, outline: true }))));
}
Content.propTypes = {
    dashboardUrl: PropTypes.string.isRequired
};
export default function NotFound({ dashboardUrl }) {
    return (React.createElement("div", { className: "page-width mt-10" },
        React.createElement("div", { className: "pt-6" },
            React.createElement(Area, { id: "notfound-page", coreComponents: [
                    {
                        component: { default: Name },
                        props: {},
                        sortOrder: 10,
                        id: 'notfound-page-title'
                    },
                    {
                        component: { default: Content },
                        props: { dashboardUrl },
                        sortOrder: 20,
                        id: 'notfound-page-content'
                    }
                ] }))));
}
NotFound.propTypes = {
    dashboardUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    dashboardUrl: url(routeId: "dashboard")
  }
`;
//# sourceMappingURL=NotFound.js.map