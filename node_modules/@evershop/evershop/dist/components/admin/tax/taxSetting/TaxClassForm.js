import { Card } from '@components/admin/cms/Card';
import Button from '@components/common/form/Button';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
function TaxClassForm({ saveTaxClassApi, closeModal, getTaxClasses }) {
    return (React.createElement(Card, { title: "Create a tax class" },
        React.createElement(Form, { id: "createTaxClass", method: "POST", action: saveTaxClassApi, submitBtn: false, onSuccess: async () => {
                await getTaxClasses({ requestPolicy: 'network-only' });
                closeModal();
            } },
            React.createElement(Card.Session, { title: "Tax class name" },
                React.createElement(Field, { name: "name", type: "text", placeholder: "Enter tax class name", validationRules: ['notEmpty'], value: "" })),
            React.createElement(Card.Session, null,
                React.createElement("div", { className: "flex justify-end gap-4" },
                    React.createElement(Button, { title: "Cancel", variant: "secondary", onAction: closeModal }),
                    React.createElement(Button, { title: "Save", variant: "primary", onAction: () => {
                            document.getElementById('createTaxClass').dispatchEvent(new Event('submit', {
                                cancelable: true,
                                bubbles: true
                            }));
                        } }))))));
}
TaxClassForm.propTypes = {
    saveTaxClassApi: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
    getTaxClasses: PropTypes.func.isRequired
};
export default TaxClassForm;
//# sourceMappingURL=TaxClassForm.js.map