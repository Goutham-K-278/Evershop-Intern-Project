import { Card } from '@components/admin/cms/Card';
import Area from '@components/common/Area';
import Button from '@components/common/form/Button';
import { useFormContext } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
import './FormContent.scss';
export default function FormContent({ gridUrl }) {
    const { state } = useFormContext();
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "grid grid-cols-1 gap-8" },
            React.createElement(Card, { title: "General" },
                React.createElement(Card.Session, null,
                    React.createElement(Area, { id: "couponEditGeneral", noOuter: true }))),
            React.createElement(Card, { title: "Discount Type" },
                React.createElement(Card.Session, null,
                    React.createElement(Area, { id: "couponEditDiscountType", noOuter: true }))),
            React.createElement("div", { className: "grid grid-cols-3 gap-x-8 grid-flow-row " },
                React.createElement("div", { className: "col-span-2 grid grid-cols-1 gap-8 auto-rows-max" },
                    React.createElement(Card, { title: "Order conditions" },
                        React.createElement(Card.Session, null,
                            React.createElement(Area, { id: "couponEditLeft", noOuter: true, className: "col-8" })))),
                React.createElement("div", { className: "col-span-1 grid grid-cols-1 gap-8 auto-rows-max" },
                    React.createElement(Card, { title: "Customer conditions" },
                        React.createElement(Card.Session, null,
                            React.createElement(Area, { id: "couponEditRight", className: "col-4", noOuter: true })))))),
        React.createElement("div", { className: "form-submit-button flex border-t border-divider mt-6 pt-6 justify-between" },
            React.createElement(Button, { title: "Cancel", variant: "critical", outline: true, onAction: () => {
                    window.location = gridUrl;
                } }),
            React.createElement(Button, { title: "Save", onAction: () => {
                    document
                        .getElementById('couponForm')
                        .dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                }, isLoading: state === 'submitting' }))));
}
FormContent.propTypes = {
    gridUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'couponForm',
    sortOrder: 10
};
export const query = `
  query Query {
    gridUrl: url(routeId: "couponGrid")
  }
`;
//# sourceMappingURL=FormContent.js.map