import PriceBasedPrice from '@components/admin/checkout/shippingSetting/PriceBasedPrice';
import WeightBasedPrice from '@components/admin/checkout/shippingSetting/WeightBasedPrice';
import { Card } from '@components/admin/cms/Card';
import Button from '@components/common/form/Button';
import { Field } from '@components/common/form/Field';
import { Input } from '@components/common/form/fields/Input';
import { Radio } from '@components/common/form/fields/Radio';
import { Toggle } from '@components/common/form/fields/Toggle';
import { Form } from '@components/common/form/Form';
import Spinner from '@components/common/Spinner';
import PropTypes from 'prop-types';
import React from 'react';
import CreatableSelect from 'react-select/creatable';
import { toast } from 'react-toastify';
import { useQuery } from 'urql';
const MethodsQuery = `
  query Methods {
    shippingMethods {
      value: shippingMethodId
      label: name
      updateApi
    }
    createShippingMethodApi: url(routeId: "createShippingMethod")
  }
`;
function Condition({ method }) {
    const [type, setType] = React.useState((method === null || method === void 0 ? void 0 : method.conditionType) || 'price');
    return (React.createElement("div", null,
        React.createElement("div", { className: "mb-4" },
            React.createElement(Radio, { name: "condition_type", options: [
                    { value: 'price', text: 'Based on order price' },
                    { value: 'weight', text: 'Based on order weight' }
                ], onChange: (value) => setType(value), value: type })),
        React.createElement("div", { className: "grid grid-cols-2 gap-8" },
            React.createElement("div", null,
                React.createElement(Field, { name: "min", label: type === 'price' ? 'Minimum order price' : 'Minimum order weight', placeholder: type === 'price' ? 'Minimum order price' : 'Minimum order weight', type: "text", value: (method === null || method === void 0 ? void 0 : method.min) || '', validationRules: ['notEmpty'] })),
            React.createElement("div", null,
                React.createElement(Field, { name: "max", label: type === 'price' ? 'Maximum order price' : 'Maximum order weight', placeholder: type === 'price' ? 'Maximum order price' : 'Maximum order weight', type: "text", value: (method === null || method === void 0 ? void 0 : method.max) || '', validationRules: ['notEmpty'] })))));
}
Condition.propTypes = {
    method: PropTypes.shape({
        conditionType: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number
    })
};
Condition.defaultProps = {
    method: null
};
function MethodForm({ saveMethodApi, closeModal, getZones, method }) {
    var _a;
    const [type, setType] = React.useState(() => {
        if (method === null || method === void 0 ? void 0 : method.calculateApi) {
            return 'api';
        }
        if (method === null || method === void 0 ? void 0 : method.priceBasedCost) {
            return 'price_based_rate';
        }
        if (method === null || method === void 0 ? void 0 : method.weightBasedCost) {
            return 'weight_based_rate';
        }
        return 'flat_rate';
    });
    const [isLoading, setIsLoading] = React.useState(false);
    const [shippingMethod, setMethod] = React.useState(method
        ? {
            value: method.methodId,
            label: method.name
        }
        : null);
    const [hasCondition, setHasCondition] = React.useState(!!(method === null || method === void 0 ? void 0 : method.conditionType));
    const [name, setName] = React.useState((method === null || method === void 0 ? void 0 : method.name) || '');
    const [updatingName, setUpdatingName] = React.useState(false);
    const [result, reexecuteQuery] = useQuery({
        query: MethodsQuery
    });
    const handleCreate = async (inputValue) => {
        setIsLoading(true);
        await fetch(result.data.createShippingMethodApi, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify({
                name: inputValue
            })
        });
        reexecuteQuery({ requestPolicy: 'network-only' });
        setIsLoading(false);
    };
    if (result.fetching) {
        return (React.createElement("div", { className: "flex justify-center p-3" },
            React.createElement(Spinner, { width: 25, height: 25 })));
    }
    const currentMethod = result.data.shippingMethods.find((m) => m.value === (shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.value));
    return (React.createElement(Card, { title: "Shipping method" },
        React.createElement(Form, { id: "shippingMethodForm", method: method ? 'PATCH' : 'POST', action: saveMethodApi, submitBtn: false, onSuccess: async (response) => {
                if (!response.error) {
                    await getZones({ requestPolicy: 'network-only' });
                    closeModal();
                    toast.success('Shipping method saved successfully');
                }
                else {
                    toast.error(response.error.message);
                }
            } },
            React.createElement(Card.Session, { title: "Method name" },
                !method ? (React.createElement(CreatableSelect, { isClearable: true, isDisabled: isLoading, isLoading: isLoading, onChange: (newValue) => setMethod(newValue), onCreateOption: handleCreate, options: result.data.shippingMethods, value: shippingMethod })) : (React.createElement("div", { className: "flex gap-4 justify-start items-center" },
                    React.createElement(Input, { name: "name", type: "text", placeholder: "Method name", validationRules: ['notEmpty'], value: name, disabled: !updatingName, suffix: React.createElement("a", { href: "#", onClick: (e) => {
                                e.preventDefault();
                                if (updatingName)
                                    setName(method.name);
                                setUpdatingName(!updatingName);
                            } },
                            React.createElement("span", { className: "text-interactive" }, updatingName ? 'Cancel' : 'Edit')), onChange: (e) => setName(e.target.value) }),
                    updatingName && (React.createElement(Button, { title: "Save", variant: "primary", onAction: async () => {
                            // Use fetch to call the API (method.updateApi) to update the method name
                            // The API should accept a PATCH request with the new name as the payload
                            // The API should return the updated method object
                            const response = await fetch(currentMethod.updateApi, {
                                method: 'PATCH',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                credentials: 'same-origin',
                                body: JSON.stringify({
                                    name
                                })
                            });
                            const data = await response.json();
                            if (response.ok) {
                                setName(data.name);
                                setUpdatingName(false);
                            }
                            else {
                                toast.error(data.error.message);
                            }
                        } })))),
                React.createElement(Field, { type: "hidden", name: "method_id", value: (shippingMethod === null || shippingMethod === void 0 ? void 0 : shippingMethod.value) || '', validationRules: ['notEmpty'] }),
                React.createElement(Toggle, { name: "is_enabled", label: "Status", value: (method === null || method === void 0 ? void 0 : method.isEnabled) || 0 })),
            React.createElement(Card.Session, { title: "Setup shipping cost" },
                React.createElement(Radio, { name: "calculation_type", options: [
                        { text: 'Flat rate', value: 'flat_rate' },
                        { text: 'Price based rate', value: 'price_based_rate' },
                        { text: 'Weight based rate', value: 'weight_based_rate' },
                        { text: 'API calculate', value: 'api' }
                    ], defaultValue: (method === null || method === void 0 ? void 0 : method.calculateApi) ? 'api' : 'flat_rate', value: type, onChange: (value) => {
                        setType(value);
                    } }),
                type === 'flat_rate' && (React.createElement(Field, { name: "cost", type: "text", placeholder: "Shipping cost", validationRules: ['notEmpty'], value: ((_a = method === null || method === void 0 ? void 0 : method.cost) === null || _a === void 0 ? void 0 : _a.value) || '' })),
                type === 'price_based_rate' && (React.createElement(PriceBasedPrice, { lines: (method === null || method === void 0 ? void 0 : method.priceBasedCost) || [] })),
                type === 'weight_based_rate' && (React.createElement(WeightBasedPrice, { lines: (method === null || method === void 0 ? void 0 : method.weightBasedCost) || [] })),
                type === 'api' && (React.createElement(Field, { name: "calculate_api", type: "text", placeholder: "Calculate API endpoint", validationRules: ['notEmpty'], value: (method === null || method === void 0 ? void 0 : method.calculateApi) || '', instruction: "This API will be called to calculate shipping cost. It supposed to return a number." })),
                React.createElement("a", { href: "#", className: "text-interactive", onClick: (e) => {
                        e.preventDefault();
                        setHasCondition(!hasCondition);
                    } }, hasCondition ? 'Remove condition' : 'Add condition'),
                !hasCondition && (React.createElement("input", { name: "condition_type", type: "hidden", value: "none" })),
                hasCondition && React.createElement(Condition, { method: method })),
            React.createElement(Card.Session, null,
                React.createElement("div", { className: "flex justify-end gap-4" },
                    React.createElement(Button, { title: "Cancel", variant: "secondary", onAction: async () => {
                            await getZones({ requestPolicy: 'network-only' });
                            closeModal();
                        } }),
                    React.createElement(Button, { title: "Save", variant: "primary", onAction: () => {
                            document.getElementById('shippingMethodForm').dispatchEvent(new Event('submit', {
                                cancelable: true,
                                bubbles: true
                            }));
                        } }))))));
}
MethodForm.propTypes = {
    saveMethodApi: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    getZones: PropTypes.func.isRequired,
    method: PropTypes.shape({
        methodId: PropTypes.number,
        name: PropTypes.string,
        isEnabled: PropTypes.bool,
        calculateApi: PropTypes.string,
        cost: PropTypes.shape({
            value: PropTypes.number
        }),
        priceBasedCost: PropTypes.arrayOf(PropTypes.shape({
            minPrice: PropTypes.shape({
                value: PropTypes.number
            }),
            cost: PropTypes.shape({
                value: PropTypes.number
            })
        })),
        weightBasedCost: PropTypes.arrayOf(PropTypes.shape({
            minWeight: PropTypes.shape({
                value: PropTypes.number
            }),
            cost: PropTypes.shape({
                value: PropTypes.number
            })
        })),
        conditionType: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number
    })
};
MethodForm.defaultProps = {
    method: null
};
export default MethodForm;
//# sourceMappingURL=MethodForm.js.map