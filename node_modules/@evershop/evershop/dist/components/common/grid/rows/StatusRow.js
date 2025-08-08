import Dot from '@components/common/Dot';
import PropTypes from 'prop-types';
import React from 'react';
export default function StatusRow({ id, areaProps }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            parseInt(areaProps.row[id], 10) === 0 && (React.createElement(Dot, { variant: "default", size: "1.2rem" })),
            parseInt(areaProps.row[id], 10) === 1 && (React.createElement(Dot, { variant: "success", size: "1.2rem" })))));
}
StatusRow.propTypes = {
    areaProps: PropTypes.shape({
        row: PropTypes.shape({
            id: PropTypes.number
        })
    }).isRequired,
    id: PropTypes.string.isRequired
};
//# sourceMappingURL=StatusRow.js.map