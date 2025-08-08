import Method from '@components/admin/checkout/shippingSetting/Method';
import MethodForm from '@components/admin/checkout/shippingSetting/MethodForm';
import { useModal } from '@components/common/modal/useModal';
import PropTypes from 'prop-types';
import React from 'react';
export function Methods({ getZones, methods, addMethodApi }) {
    const modal = useModal();
    return (React.createElement("div", { className: "my-8" },
        React.createElement("table", { className: "border-collapse divide-y" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", { className: "border-none" }, "Method"),
                    React.createElement("th", { className: "border-none" }, "Status"),
                    React.createElement("th", { className: "border-none" }, "Cost"),
                    React.createElement("th", { className: "border-none" }, "Condition"),
                    React.createElement("th", { className: "border-none" }, "Action"))),
            React.createElement("tbody", null, methods.map((method) => (React.createElement("tr", { key: method.methodId, className: "border-divider py-8" },
                React.createElement(Method, { method: method, getZones: getZones })))))),
        React.createElement("div", { className: "mt-4" },
            React.createElement("a", { href: "#", className: "text-interactive", onClick: (e) => {
                    e.preventDefault();
                    modal.openModal();
                } }, "+ Add Method")),
        modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(MethodForm, { saveMethodApi: addMethodApi, closeModal: () => modal.closeModal(), getZones: getZones })))))));
}
Methods.propTypes = {
    methods: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        cost: PropTypes.shape({
            value: PropTypes.number
        })
    })).isRequired,
    getZones: PropTypes.func.isRequired,
    addMethodApi: PropTypes.string.isRequired
};
//# sourceMappingURL=Methods.js.map