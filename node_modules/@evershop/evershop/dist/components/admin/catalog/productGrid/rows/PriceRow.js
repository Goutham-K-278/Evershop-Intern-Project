import PropTypes from 'prop-types';
import React from 'react';
export default function ProductPriceRow({ areaProps: { row } }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("span", null, row.price.regular.text))));
}
ProductPriceRow.propTypes = {
    areaProps: PropTypes.shape({
        row: PropTypes.shape({
            price: PropTypes.shape({
                regular: PropTypes.shape({
                    text: PropTypes.string.isRequired
                }).isRequired
            }).isRequired
        }).isRequired
    }).isRequired
};
//# sourceMappingURL=PriceRow.js.map