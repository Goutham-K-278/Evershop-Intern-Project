import PropTypes from 'prop-types';
import React from 'react';
function Breadcrumb({ pageInfo: { breadcrumbs } }) {
    return breadcrumbs.length ? (React.createElement("div", { className: "breadcrumb page-width my-8" }, breadcrumbs.map((breadcrumb, index) => index === breadcrumbs.length - 1 ? (React.createElement("span", { key: index }, breadcrumb.title)) : (React.createElement("span", { key: index },
        React.createElement("a", { href: breadcrumb.url, className: "text-interactive" }, breadcrumb.title),
        React.createElement("span", null, ' / ')))))) : null;
}
Breadcrumb.propTypes = {
    pageInfo: PropTypes.shape({
        breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.string
        }))
    }).isRequired
};
export const query = `
  query query {
    pageInfo {
      breadcrumbs {
        title
        url
      }
    }
  }
`;
export const layout = {
    areaId: 'content',
    sortOrder: 0
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map