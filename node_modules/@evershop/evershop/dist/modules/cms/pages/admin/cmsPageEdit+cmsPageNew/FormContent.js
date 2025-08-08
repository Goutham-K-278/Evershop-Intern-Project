import Area from '@components/common/Area';
import Button from '@components/common/form/Button';
import { useFormContext } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
import './FormContent.scss';
export default function FormContent({ gridUrl }) {
    const { state } = useFormContext();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "grid gap-8 grid-cols-1" },
            React.createElement(Area, { id: "wideScreen", noOuter: true })),
        React.createElement("div", { className: "form-submit-button flex border-t border-divider mt-6 pt-6 justify-between" },
            React.createElement(Button, { title: "Cancel", variant: "critical", outline: true, onAction: () => {
                    window.location = gridUrl;
                } }),
            React.createElement(Button, { title: "Save", onAction: async () => {
                    // const editorData = await editorRef.save();
                    // console.log(editorData);
                    // return;
                    document
                        .getElementById('cmsPageForm')
                        .dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                }, isLoading: state === 'submitting' }))));
}
FormContent.propTypes = {
    gridUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'cmsPageForm',
    sortOrder: 10
};
export const query = `
  query Query {
    gridUrl: url(routeId: "cmsPageGrid")
  }
`;
//# sourceMappingURL=FormContent.js.map