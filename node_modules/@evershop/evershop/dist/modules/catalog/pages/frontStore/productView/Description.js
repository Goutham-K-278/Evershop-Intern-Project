import Editor from '@components/common/Editor';
import PropTypes from 'prop-types';
import React from 'react';
export default function Description({ product: { description } }) {
    return (React.createElement("div", { className: "mt-8 md:mt-12" },
        React.createElement("div", { className: "product-description" },
            React.createElement(Editor, { rows: description }),
            "bb")));
}
Description.propTypes = {
    product: PropTypes.shape({
        description: PropTypes.arrayOf(PropTypes.shape({
            size: PropTypes.number.isRequired,
            columns: PropTypes.arrayOf(PropTypes.shape({
                size: PropTypes.number.isRequired,
                data: PropTypes.object
            })).isRequired
        })).isRequired
    }).isRequired
};
export const layout = {
    areaId: 'productPageMiddleRight',
    sortOrder: 50
};
export const query = `
  query Query {
    product (id: getContextValue('productId')) {
      description
    }
  }`;
//# sourceMappingURL=Description.js.map