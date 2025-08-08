import MethodForm from '@components/admin/checkout/shippingSetting/MethodForm';
import { useModal } from '@components/common/modal/useModal';
import CogIcon from '@heroicons/react/outline/CogIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
function Method({ method, getZones }) {
    var _a;
    const modal = useModal();
    return (React.createElement(React.Fragment, null,
        React.createElement(React.Fragment, null,
            React.createElement("td", { className: "border-none py-4" }, method.name),
            React.createElement("td", { className: "border-none py-4" }, method.isEnabled ? 'Enabled' : 'Disabled'),
            React.createElement("td", { className: "border-none py-4" }, ((_a = method.cost) === null || _a === void 0 ? void 0 : _a.text) || (React.createElement("a", { href: "#", className: "text-interactive", onClick: (e) => {
                    e.preventDefault();
                    modal.openModal();
                } },
                React.createElement(CogIcon, { width: 22, height: 22 })))),
            React.createElement("td", { className: "border-none py-4" }, method.conditionType
                ? `${method.min || 0} <= ${method.conditionType} <= ${method.max || '∞'}`
                : 'None'),
            React.createElement("td", { className: "border-none py-4" },
                React.createElement("a", { href: "#", className: "text-interactive", onClick: (e) => {
                        e.preventDefault();
                        modal.openModal();
                    } }, "Edit"),
                React.createElement("a", { href: "#", className: "text-critical ml-8", onClick: async (e) => {
                        e.preventDefault();
                        try {
                            const response = await fetch(method.deleteApi, {
                                method: 'DELETE',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                credentials: 'include'
                            });
                            if (response.ok) {
                                await getZones();
                                // Toast success
                                toast.success('Method removed successfully');
                            }
                            else {
                                // Toast error
                                toast.error('Failed to remove method');
                            }
                        }
                        catch (error) {
                            // Toast error
                            toast.error('Failed to remove method');
                        }
                    } }, "Delete"))),
        modal.state.showing && (React.createElement("td", { className: "border-none w-0 h-0" },
            React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
                React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                    React.createElement("div", { className: "modal" },
                        React.createElement(MethodForm, { saveMethodApi: method.updateApi, closeModal: () => modal.closeModal(), getZones: getZones, method: method }))))))));
}
Method.propTypes = {
    method: PropTypes.shape({
        name: PropTypes.string.isRequired,
        isEnabled: PropTypes.bool.isRequired,
        cost: PropTypes.shape({
            text: PropTypes.string.isRequired,
            value: PropTypes.number.isRequired
        }),
        priceBasedCost: PropTypes.arrayOf(PropTypes.shape({
            minPrice: PropTypes.number.isRequired,
            cost: PropTypes.number.isRequired
        })),
        weightBasedCost: PropTypes.arrayOf(PropTypes.shape({
            minWeight: PropTypes.number.isRequired,
            cost: PropTypes.number.isRequired
        })),
        conditionType: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        updateApi: PropTypes.string.isRequired,
        deleteApi: PropTypes.string.isRequired
    }),
    getZones: PropTypes.func.isRequired
};
Method.defaultProps = {
    method: {
        cost: {
            text: ''
        },
        priceBasedCost: [],
        weightBasedCost: [],
        conditionType: null,
        min: null,
        max: null
    }
};
export default Method;
//# sourceMappingURL=Method.js.map