import { useModal } from '@components/common/modal/useModal';
import PropTypes from 'prop-types';
import React from 'react';
import RateForm from './RateForm';
function Rate({ rate, getTaxClasses }) {
    const modal = useModal();
    return (React.createElement(React.Fragment, null,
        React.createElement(React.Fragment, null,
            React.createElement("td", { className: "border-none py-4" }, rate.name),
            React.createElement("td", { className: "border-none py-4" },
                rate.rate,
                "%"),
            React.createElement("td", { className: "border-none py-4" }, rate.isCompound ? 'Yes' : 'No'),
            React.createElement("td", { className: "border-none py-4" }, rate.priority),
            React.createElement("td", { className: "border-none py-4" },
                React.createElement("a", { href: "#", className: "text-interactive", onClick: (e) => {
                        e.preventDefault();
                        modal.openModal();
                    } }, "Edit"),
                React.createElement("a", { href: "#", className: "text-critical ml-8", onClick: async (e) => {
                        e.preventDefault();
                        await fetch(rate.deleteApi, {
                            method: 'DELETE'
                        });
                        await getTaxClasses({ requestPolicy: 'network-only' });
                    } }, "Delete"))),
        modal.state.showing && (React.createElement("td", { className: "border-none w-0 h-0" },
            React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
                React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                    React.createElement("div", { className: "modal" },
                        React.createElement(RateForm, { saveRateApi: rate.updateApi, closeModal: () => modal.closeModal(), getTaxClasses: getTaxClasses, rate: rate }))))))));
}
Rate.propTypes = {
    rate: PropTypes.shape({
        uuid: PropTypes.string,
        name: PropTypes.string,
        isCompound: PropTypes.bool,
        rate: PropTypes.number,
        priority: PropTypes.number,
        country: PropTypes.string,
        province: PropTypes.string,
        postcode: PropTypes.string,
        updateApi: PropTypes.string,
        deleteApi: PropTypes.string
    }).isRequired,
    getTaxClasses: PropTypes.func.isRequired
};
export default Rate;
//# sourceMappingURL=Rate.js.map