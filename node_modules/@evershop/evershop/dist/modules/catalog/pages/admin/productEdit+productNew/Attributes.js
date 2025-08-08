import { Card } from '@components/admin/cms/Card';
import { Field } from '@components/common/form/Field';
import PropTypes from 'prop-types';
import React from 'react';
const getGroup = (groups = [], groupId = null) => groups.find((group) => parseInt(group.groupId, 10) === parseInt(groupId, 10)) || groups[0];
export default function Attributes({ product, groups: { items } }) {
    const attributeIndex = (product === null || product === void 0 ? void 0 : product.attributeIndex) || [];
    const groupId = (product === null || product === void 0 ? void 0 : product.groupId) || undefined;
    const [currentGroup, setCurrentGroup] = React.useState(getGroup(items, groupId));
    const handleGroupChange = (e) => {
        // Check if product is in a variant group
        if (product === null || product === void 0 ? void 0 : product.variantGroupId) {
            alert('You can not change the attribute group of a product that is already in a variant group.');
        }
        else {
            setCurrentGroup(getGroup(items, e.target.value));
        }
    };
    return (React.createElement(Card, null,
        React.createElement(Card.Session, { title: "Attribute group", subdued: true },
            React.createElement("div", null,
                (product === null || product === void 0 ? void 0 : product.variantGroupId) && (React.createElement("div", null,
                    React.createElement("input", { type: "hidden", value: currentGroup.groupId, name: "group_id" }),
                    React.createElement("div", { className: "border rounded border-divider p-4" },
                        React.createElement("span", null, currentGroup.groupName)),
                    React.createElement("div", { className: "italic text-textSubdued" }, "Can not change the attribute group of a product that is already in a variant group."))),
                !(product === null || product === void 0 ? void 0 : product.variantGroupId) && (React.createElement(Field, { name: "group_id", value: currentGroup.groupId, onChange: (e) => handleGroupChange(e), options: (() => items.map((g) => ({
                        value: parseInt(g.groupId, 10),
                        text: g.groupName
                    })))(), type: "select" })))),
        React.createElement(Card.Session, { title: "Attributes" },
            React.createElement("table", { className: "table table-auto" },
                React.createElement("tbody", null, currentGroup.attributes.items.map((attribute, index) => {
                    const valueIndex = attributeIndex.find((idx) => idx.attributeId === attribute.attributeId);
                    const valueIndexMulti = attributeIndex.filter((idx) => idx.attributeId === attribute.attributeId);
                    let field = null;
                    switch (attribute.type) {
                        case 'text':
                            field = (React.createElement(Field, { name: `attributes[${index}][value]`, value: valueIndex === null || valueIndex === void 0 ? void 0 : valueIndex.optionText, validationRules: parseInt(attribute.isRequired, 10) === 1
                                    ? ['notEmpty']
                                    : [], type: "text" }));
                            break;
                        case 'date':
                            field = (React.createElement(Field, { name: `attributes[${index}][value]`, value: valueIndex === null || valueIndex === void 0 ? void 0 : valueIndex.optionText, validationRules: parseInt(attribute.isRequired, 10) === 1
                                    ? ['notEmpty']
                                    : [], type: "date" }));
                            break;
                        case 'datetime':
                            field = (React.createElement(Field, { name: `attributes[${index}][value]`, value: valueIndex === null || valueIndex === void 0 ? void 0 : valueIndex.optionText, validationRules: parseInt(attribute.isRequired, 10) === 1
                                    ? ['notEmpty']
                                    : [], type: "datetime" }));
                            break;
                        case 'textarea':
                            field = (React.createElement(Field, { name: `attributes[${index}][value]`, value: valueIndex === null || valueIndex === void 0 ? void 0 : valueIndex.optionText, validationRules: parseInt(attribute.isRequired, 10) === 1
                                    ? ['notEmpty']
                                    : [], type: "textarea" }));
                            break;
                        case 'select':
                            field = (React.createElement(Field, { name: `attributes[${index}][value]`, value: valueIndex === null || valueIndex === void 0 ? void 0 : valueIndex.optionId, options: (() => attribute.options.map((o) => ({
                                    value: o.optionId,
                                    text: o.optionText
                                })))(), validationRules: parseInt(attribute.isRequired, 10) === 1
                                    ? ['notEmpty']
                                    : [], type: "select" }));
                            break;
                        case 'multiselect':
                            field = (React.createElement(Field, { name: `attributes[${index}][value][]`, value: valueIndexMulti.map((i) => i.optionId), options: (() => attribute.options.map((o) => ({
                                    value: o.optionId,
                                    text: o.optionText
                                })))(), validationRules: parseInt(attribute.isRequired, 10) === 1
                                    ? ['notEmpty']
                                    : [], type: "multiselect" }));
                            break;
                        default:
                            field = (React.createElement(Field, { name: `attributes[${index}][value]`, value: valueIndex.optionText, validationRules: parseInt(attribute.isRequired, 10) === 1
                                    ? ['notEmpty']
                                    : [], type: "text" }));
                    }
                    return (React.createElement("tr", { key: attribute.attributeCode },
                        React.createElement("td", null, attribute.attributeName),
                        React.createElement("td", null,
                            React.createElement("input", { type: "hidden", value: attribute.attributeCode, name: `attributes[${index}][attribute_code]` }),
                            field)));
                }))))));
}
Attributes.propTypes = {
    groups: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            groupId: PropTypes.string,
            groupName: PropTypes.string,
            attributes: PropTypes.shape({
                items: PropTypes.arrayOf(PropTypes.shape({
                    attributeId: PropTypes.string,
                    attributeName: PropTypes.string,
                    attributeCode: PropTypes.string,
                    type: PropTypes.string,
                    isRequired: PropTypes.number,
                    options: PropTypes.arrayOf(PropTypes.shape({
                        optionId: PropTypes.string,
                        optionText: PropTypes.string
                    }))
                }))
            })
        }))
    }),
    product: PropTypes.shape({
        attributeIndex: PropTypes.arrayOf(PropTypes.shape({
            attributeId: PropTypes.string,
            optionId: PropTypes.number,
            optionText: PropTypes.string
        })),
        groupId: PropTypes.string,
        variantGroupId: PropTypes.string
    })
};
Attributes.defaultProps = {
    groups: [],
    product: {}
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 30
};
export const query = `
  query Query ($filters: [FilterInput!]) {
    product(id: getContextValue("productId", null)) {
      groupId
      variantGroupId
      attributeIndex {
        attributeId
        optionId
        optionText
      }
    },
    groups: attributeGroups(filters: $filters) {
      items {
        groupId: attributeGroupId
        groupName
        attributes {
          items {
            attributeId
            attributeName
            attributeCode
            type
            isRequired
            options {
              optionId: attributeOptionId
              optionText
            }
          }
        }
      }
    }
  }
`;
export const variables = `
{
  filters: [{ key: "limit", operation: 'eq', value: 1000 }]
}`;
//# sourceMappingURL=Attributes.js.map