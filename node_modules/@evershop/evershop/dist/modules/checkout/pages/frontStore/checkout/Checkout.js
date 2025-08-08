import Area from '@components/common/Area';
import { CheckoutProvider } from '@components/common/context/checkout';
import { CheckoutSteps, useCheckoutSteps, useCheckoutStepsDispatch } from '@components/common/context/checkoutSteps';
import Chervon from '@heroicons/react/outline/ChevronRightIcon';
import PropTypes from 'prop-types';
import React from 'react';
import './Checkout.scss';
import { _ } from '../../../../../lib/locale/translate/_.js';
function Steps() {
    return (React.createElement(Area, { id: "checkoutSteps", className: "checkout-steps", coreComponents: [] }));
}
function Breadcrumb() {
    const steps = useCheckoutSteps();
    return (React.createElement("div", { className: "mb-8 mt-4 flex checkout-breadcrumb" }, steps.map((step, index) => {
        const separator = index < steps.length - 1 ? (React.createElement("span", { className: "separator" },
            React.createElement(Chervon, { width: 10, height: 10 }))) : null;
        if (step.isCompleted === true) {
            return (React.createElement("span", { key: step.id, className: "text-muted flex items-center" },
                React.createElement("span", null, step.title),
                " ",
                separator));
        }
        else {
            return (React.createElement("span", { key: step.id, className: "text-interactive flex items-center" },
                React.createElement("span", null, step.title),
                " ",
                separator));
        }
    })));
}
function CompletedSteps() {
    const steps = useCheckoutSteps();
    const { editStep } = useCheckoutStepsDispatch();
    const completedSteps = steps.filter((step, index) => step.isCompleted === true && index < steps.length - 1);
    if (completedSteps.length === 0) {
        return null;
    }
    return (React.createElement("div", { className: "mt-4" },
        React.createElement("div", { className: "checkout-completed-steps border rounded px-8 border-divider divide-y" }, completedSteps.map((step) => (React.createElement("div", { key: step.id, className: "grid gap-4 grid-cols-4 py-4 border-divider" },
            React.createElement("div", { className: "col-span-1" },
                React.createElement("span", null, step.previewTitle)),
            React.createElement("div", { className: "col-span-2" },
                React.createElement("span", null, step.preview)),
            React.createElement("div", { className: "col-span-1 flex justify-end" }, step.editable && (React.createElement("a", { href: "#", className: "text-interactive hover:underline", onClick: (e) => {
                    e.preventDefault();
                    editStep(step.id);
                } }, _('Change'))))))))));
}
export default function CheckoutPage({ checkout: { cartId }, placeOrderAPI, getPaymentMethodAPI, checkoutSuccessUrl }) {
    return (React.createElement(CheckoutSteps, { value: [] },
        React.createElement(CheckoutProvider, { cartId: cartId, placeOrderAPI: placeOrderAPI, getPaymentMethodAPI: getPaymentMethodAPI, checkoutSuccessUrl: checkoutSuccessUrl },
            React.createElement("div", { className: "page-width grid grid-cols-1 md:grid-cols-2 gap-12" },
                React.createElement(Area, { id: "checkoutPageLeft", coreComponents: [
                        {
                            component: { default: Breadcrumb },
                            sortOrder: 10
                        },
                        {
                            component: { default: CompletedSteps },
                            sortOrder: 15
                        },
                        {
                            component: { default: Steps },
                            sortOrder: 20
                        }
                    ] }),
                React.createElement(Area, { id: "checkoutPageRight" })))));
}
CheckoutPage.propTypes = {
    checkoutSuccessUrl: PropTypes.string.isRequired,
    getPaymentMethodAPI: PropTypes.string.isRequired,
    placeOrderAPI: PropTypes.string.isRequired,
    checkout: PropTypes.shape({
        cartId: PropTypes.string.isRequired
    }).isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    checkout {
      cartId
    }
    placeOrderAPI: url(routeId: "createOrder")
    getPaymentMethodAPI: url(routeId: "getPaymentMethods")
    checkoutSuccessUrl: url(routeId: "checkoutSuccess")
  }
`;
//# sourceMappingURL=Checkout.js.map