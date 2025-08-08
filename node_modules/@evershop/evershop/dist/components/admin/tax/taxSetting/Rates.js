import { useModal } from '@components/common/modal/useModal';
import PropTypes from 'prop-types';
import React from 'react';
import Rate from './Rate';
import RateForm from './RateForm';
export function Rates({ getTaxClasses, rates, addRateApi }) {
    const modal = useModal();
    return (React.createElement("div", { className: "my-8" },
        React.createElement("table", { className: "border-collapse divide-y" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", { className: "border-none" }, "Name"),
                    React.createElement("th", { className: "border-none" }, "Rate"),
                    React.createElement("th", { className: "border-none" }, "Compound"),
                    React.createElement("th", { className: "border-none" }, "Priority"),
                    React.createElement("th", { className: "border-none" }, "Action"))),
            React.createElement("tbody", null, rates.map((rate) => (React.createElement("tr", { key: rate.uuid, className: "border-divider py-8" },
                React.createElement(Rate, { rate: rate, getTaxClasses: getTaxClasses })))))),
        React.createElement("div", { className: "mt-4" },
            React.createElement("a", { href: "#", className: "text-interactive", onClick: (e) => {
                    e.preventDefault();
                    modal.openModal();
                } }, "+ Add Rate")),
        modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(RateForm, { saveRateApi: addRateApi, closeModal: () => modal.closeModal(), getTaxClasses: getTaxClasses })))))));
}
Rates.propTypes = {
    rates: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        rate: PropTypes.number.isRequired,
        isCompound: PropTypes.bool.isRequired,
        priority: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        province: PropTypes.string.isRequired,
        postcode: PropTypes.string.isRequired
    })).isRequired,
    getTaxClasses: PropTypes.func.isRequired,
    addRateApi: PropTypes.string.isRequired
};
//# sourceMappingURL=Rates.js.map