import PropTypes from 'prop-types';
import React from 'react';
export default function CreateAt({ time }) {
    return (React.createElement("td", null,
        React.createElement("div", null,
            React.createElement("span", null, time))));
}
CreateAt.propTypes = {
    time: PropTypes.string.isRequired
};
//# sourceMappingURL=CreateAt.js.map