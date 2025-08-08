import PropTypes from 'prop-types';
import React from 'react';
export default function Version({ version }) {
    return (React.createElement("div", { className: "version" },
        React.createElement("span", null,
            "Version ",
            version)));
}
Version.propTypes = {
    version: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'footerLeft',
    sortOrder: 20
};
export const query = `
  query query {
    version
  }
`;
//# sourceMappingURL=Version.js.map