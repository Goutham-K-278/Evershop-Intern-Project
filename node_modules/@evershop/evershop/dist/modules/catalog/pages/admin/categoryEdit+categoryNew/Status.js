import { Card } from '@components/admin/cms/Card';
import { Field } from '@components/common/form/Field';
import PropTypes from 'prop-types';
import React from 'react';
export default function Status({ category }) {
    return (React.createElement(Card, null,
        React.createElement(Card.Session, { title: "Status" },
            React.createElement(Field, { type: "radio", name: "status", options: [
                    { value: 0, text: 'Disabled' },
                    { value: 1, text: 'Enabled' }
                ], value: (category === null || category === void 0 ? void 0 : category.status) === undefined ? 1 : category.status })),
        React.createElement(Card.Session, { title: "Include In Store Menu" },
            React.createElement(Field, { type: "radio", name: "include_in_nav", options: [
                    { value: 0, text: 'No' },
                    { value: 1, text: 'Yes' }
                ], value: (category === null || category === void 0 ? void 0 : category.includeInNav) === undefined ? 1 : category.includeInNav })),
        React.createElement(Card.Session, { title: "Show Products?" },
            React.createElement(Field, { type: "radio", name: "show_products", options: [
                    { value: 0, text: 'No' },
                    { value: 1, text: 'Yes' }
                ], value: (category === null || category === void 0 ? void 0 : category.showProducts) === undefined ? 1 : category.showProducts }))));
}
Status.propTypes = {
    category: PropTypes.shape({
        status: PropTypes.number,
        includeInNav: PropTypes.number,
        showProducts: PropTypes.number
    })
};
Status.defaultProps = {
    category: {}
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 15
};
export const query = `
  query Query {
    category(id: getContextValue("categoryId", null)) {
      status
      includeInNav
      showProducts
    }
  }
`;
//# sourceMappingURL=Status.js.map