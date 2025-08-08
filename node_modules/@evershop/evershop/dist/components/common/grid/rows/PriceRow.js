import { useAppState } from '@components/common/context/app';
import PropTypes from 'prop-types';
import React from 'react';
export default function PriceRow({ id, areaProps }) {
    const context = useAppState();
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("span", null, new Intl.NumberFormat(context.language, {
                style: 'currency',
                currency: context.currency
            }).format(areaProps.row[id])))));
}
PriceRow.propTypes = {
    areaProps: PropTypes.shape({
        row: PropTypes.shape({
            id: PropTypes.number
        })
    }).isRequired,
    id: PropTypes.string.isRequired
};
//# sourceMappingURL=PriceRow.js.map