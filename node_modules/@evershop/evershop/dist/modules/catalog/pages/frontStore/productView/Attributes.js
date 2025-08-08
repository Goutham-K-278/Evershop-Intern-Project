import PropTypes from 'prop-types';
import React from 'react';
function Attributes({ product: { attributes } }) {
    if (!attributes.length) {
        return null;
    }
    return (React.createElement("div", { className: "specification" },
        React.createElement("ul", { className: "list-disc list-inside" }, attributes.map((attribute) => (React.createElement("li", { key: attribute.attributeCode },
            React.createElement("strong", null,
                attribute.attributeName,
                ": "),
            ' ',
            React.createElement("span", null, attribute.optionText)))))));
}
Attributes.propTypes = {
    product: PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.shape({
            attributeName: PropTypes.string.isRequired,
            attributeCode: PropTypes.string.isRequired,
            optionText: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
};
export const query = `
  query Query {
    product (id: getContextValue('productId')) {
      attributes: attributeIndex {
        attributeName
        attributeCode
        optionText
      }
    }
  }
`;
export const layout = {
    areaId: 'productViewGeneralInfo',
    sortOrder: 25
};
export default Attributes;
//# sourceMappingURL=Attributes.js.map