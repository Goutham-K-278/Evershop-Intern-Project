import Button from '@components/common/form/Button';
import PropTypes from 'prop-types';
import React from 'react';
export default function NewProductButton({ newProductUrl }) {
    return React.createElement(Button, { url: newProductUrl, title: "New Product" });
}
NewProductButton.propTypes = {
    newProductUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'pageHeadingRight',
    sortOrder: 10
};
export const query = `
  query Query {
    newProductUrl: url(routeId: "productNew")
  }
`;
//# sourceMappingURL=NewProductButton.js.map