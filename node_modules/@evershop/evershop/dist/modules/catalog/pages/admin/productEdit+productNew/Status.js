import { Card } from '@components/admin/cms/Card';
import { Field } from '@components/common/form/Field';
import PropTypes from 'prop-types';
import React from 'react';
export default function Status({ product }) {
    return (React.createElement(Card, { title: "Product status", subdued: true },
        React.createElement(Card.Session, null,
            React.createElement(Field, { id: "status", name: "status", value: (product === null || product === void 0 ? void 0 : product.status) === undefined ? 1 : product.status, label: "Status", options: [
                    { value: 0, text: 'Disabled' },
                    { value: 1, text: 'Enabled' }
                ], type: "radio" })),
        React.createElement(Card.Session, null,
            React.createElement(Field, { id: "visibility", name: "visibility", value: (product === null || product === void 0 ? void 0 : product.visibility) === undefined ? 1 : product.visibility, label: "Visibility", options: [
                    { value: 0, text: 'Not visible' },
                    { value: 1, text: 'Visible' }
                ], type: "radio" }))));
}
Status.propTypes = {
    product: PropTypes.shape({
        status: PropTypes.number.isRequired,
        visibility: PropTypes.number.isRequired
    })
};
Status.defaultProps = {
    product: {
        status: 1,
        visibility: 1
    }
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 10
};
export const query = `
  query Query {
    product(id: getContextValue("productId", null)) {
      status
      visibility
      category {
        value: categoryId
        label: name
      }
    }
  }
`;
//# sourceMappingURL=Status.js.map