import Editor from '@components/common/Editor';
import PropTypes from 'prop-types';
import React from 'react';
export default function Page({ page }) {
    return (React.createElement("div", { className: "page-width" },
        React.createElement("div", { className: "prose prose-base max-w-none" },
            React.createElement("h1", { className: "text-center" }, page.name),
            React.createElement(Editor, { rows: page.content }))));
}
Page.propTypes = {
    page: PropTypes.shape({
        content: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 1
};
export const query = `
  query Query {
    page: cmsPage(id: getContextValue("pageId")) {
      name
      content
    }
  }
`;
//# sourceMappingURL=View.js.map