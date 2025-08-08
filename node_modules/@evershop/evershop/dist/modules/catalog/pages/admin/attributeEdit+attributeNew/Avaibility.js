import { Card } from '@components/admin/cms/Card';
import { Field } from '@components/common/form/Field';
import PropTypes from 'prop-types';
import React from 'react';
export default function General({ attribute }) {
    return (React.createElement(Card, { title: "Setting", subdued: true },
        React.createElement(Card.Session, null,
            React.createElement(Field, { id: "is_required", type: "radio", name: "is_required", label: "Is Required?", options: [
                    { value: 0, text: 'Not required' },
                    { value: 1, text: 'Required' }
                ], value: attribute === null || attribute === void 0 ? void 0 : attribute.isRequired })),
        React.createElement(Card.Session, null,
            React.createElement(Field, { id: "is_filterable", type: "radio", name: "is_filterable", label: "Is Filterable?", options: [
                    { value: 0, text: 'No' },
                    { value: 1, text: 'Yes' }
                ], value: attribute === null || attribute === void 0 ? void 0 : attribute.isFilterable })),
        React.createElement(Card.Session, null,
            React.createElement(Field, { id: "display_on_frontend", type: "radio", name: "display_on_frontend", label: "Show to customers?", options: [
                    { value: 0, text: 'No' },
                    { value: 1, text: 'Yes' }
                ], value: attribute === null || attribute === void 0 ? void 0 : attribute.displayOnFrontend })),
        React.createElement(Card.Session, null,
            React.createElement(Field, { id: "sort_order", type: "text", name: "sort_order", label: "Sort order", value: attribute === null || attribute === void 0 ? void 0 : attribute.sortOrder, validationRules: ['notEmpty', 'number'] }))));
}
General.propTypes = {
    attribute: PropTypes.shape({
        displayOnFrontend: PropTypes.number,
        isFilterable: PropTypes.number,
        isRequired: PropTypes.number,
        sortOrder: PropTypes.number
    })
};
General.defaultProps = {
    attribute: {}
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 10
};
export const query = `
  query Query {
    attribute(id: getContextValue("attributeId", null)) {
      attributeId
      isFilterable
      isRequired
      displayOnFrontend
      sortOrder
    }
  }
`;
//# sourceMappingURL=Avaibility.js.map