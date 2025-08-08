import { Toggle } from '@components/common/form/fields/Toggle';
import PropTypes from 'prop-types';
import React from 'react';
export default function Status({ cmsPage }) {
    return (React.createElement("div", { className: "form-field-container" },
        React.createElement(Toggle, { id: "status", name: "status", label: "Status", value: cmsPage === null || cmsPage === void 0 ? void 0 : cmsPage.status })));
}
Status.propTypes = {
    cmsPage: PropTypes.shape({
        status: PropTypes.number,
        includeInNave: PropTypes.number
    })
};
Status.defaultProps = {
    cmsPage: null
};
export const layout = {
    areaId: 'pageEditGeneral',
    sortOrder: 15
};
export const query = `
  query Query {
    cmsPage(id: getContextValue("cmsPageId", null)) {
      status
    }
  }
`;
//# sourceMappingURL=Status.js.map