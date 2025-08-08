import { Card } from '@components/admin/cms/Card';
import Button from '@components/common/form/Button';
import { Field } from '@components/common/form/Field';
import { Toggle } from '@components/common/form/fields/Toggle';
import { Form } from '@components/common/form/Form';
import Spinner from '@components/common/Spinner';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { useQuery } from 'urql';
const MethodsQuery = `
  query Methods {
    shippingMethods {
      value: shippingMethodId
      label: name
    }
    createShippingMethodApi: url(routeId: "createShippingMethod")
  }
`;
function MethodForm({ saveRateApi, closeModal, getTaxClasses, rate }) {
    const [result] = useQuery({
        query: MethodsQuery
    });
    if (result.fetching) {
        return (React.createElement("div", { className: "flex justify-center p-3" },
            React.createElement(Spinner, { width: 25, height: 25 })));
    }
    return (React.createElement(Card, { title: "Tax rate" },
        React.createElement(Form, { id: "taxRateForm", method: rate ? 'PATCH' : 'POST', action: saveRateApi, submitBtn: false, onSuccess: async (response) => {
                if (!response.error) {
                    await getTaxClasses({ requestPolicy: 'network-only' });
                    closeModal();
                    toast.success('Tax rate has been saved successfully!');
                }
                else {
                    toast.error(response.error.message);
                }
            } },
            React.createElement(Card.Session, { title: "Basic" },
                React.createElement("div", { className: "grid grid-cols-2 gap-8" },
                    React.createElement("div", null,
                        React.createElement(Field, { name: "name", type: "text", placeholder: "Name", validationRules: ['notEmpty'], label: "Name", value: rate === null || rate === void 0 ? void 0 : rate.name })),
                    React.createElement("div", null,
                        React.createElement(Field, { name: "rate", type: "text", label: "Rate", placeholder: "Rate", validationRules: ['notEmpty'], value: rate === null || rate === void 0 ? void 0 : rate.rate, suffix: "%" })))),
            React.createElement(Card.Session, { title: "Setup shipping cost" },
                React.createElement("div", { className: "grid grid-cols-3 gap-8" },
                    React.createElement("div", null,
                        React.createElement(Field, { name: "country", type: "text", label: "Country", placeholder: "Country", validationRules: ['notEmpty'], value: rate === null || rate === void 0 ? void 0 : rate.country })),
                    React.createElement("div", null,
                        React.createElement(Field, { name: "province", type: "text", label: "Provinces", placeholder: "Provinces", validationRules: ['notEmpty'], value: rate === null || rate === void 0 ? void 0 : rate.province })),
                    React.createElement("div", null,
                        React.createElement(Field, { name: "postcode", type: "text", label: "Postcode", placeholder: "Postcode", validationRules: ['notEmpty'], value: rate === null || rate === void 0 ? void 0 : rate.postcode }))),
                React.createElement("div", { className: "grid grid-cols-2 gap-8 mt-8" },
                    React.createElement("div", null,
                        React.createElement(Toggle, { name: "is_compound", label: "Is compound", value: (rate === null || rate === void 0 ? void 0 : rate.isCompound) || false })),
                    React.createElement("div", null)),
                React.createElement("div", { className: "grid grid-cols-2 gap-8 mt-8" },
                    React.createElement("div", null,
                        React.createElement(Field, { name: "priority", type: "text", label: "Priority", placeholder: "Priority", validationRules: ['notEmpty'], value: rate === null || rate === void 0 ? void 0 : rate.priority })),
                    React.createElement("div", null))),
            React.createElement(Card.Session, null,
                React.createElement("div", { className: "flex justify-end gap-4" },
                    React.createElement(Button, { title: "Cancel", variant: "secondary", onAction: closeModal }),
                    React.createElement(Button, { title: "Save", variant: "primary", onAction: () => {
                            document.getElementById('taxRateForm').dispatchEvent(new Event('submit', {
                                cancelable: true,
                                bubbles: true
                            }));
                        } }))))));
}
MethodForm.propTypes = {
    saveRateApi: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    getTaxClasses: PropTypes.func.isRequired,
    rate: PropTypes.shape({
        name: PropTypes.string,
        rate: PropTypes.number,
        country: PropTypes.string,
        province: PropTypes.string,
        postcode: PropTypes.string,
        isCompound: PropTypes.bool,
        priority: PropTypes.number
    })
};
MethodForm.defaultProps = {
    rate: null
};
export default MethodForm;
//# sourceMappingURL=RateForm.js.map