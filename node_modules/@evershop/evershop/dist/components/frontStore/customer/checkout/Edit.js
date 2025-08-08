import { useCheckoutStepsDispatch } from '@components/common/context/checkoutSteps';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { _ } from '../../../../lib/locale/translate/_.js';
export function Edit({ customer, addContactInfoApi, email, setEmail, loginUrl }) {
    const { completeStep } = useCheckoutStepsDispatch();
    const onSuccess = async (response) => {
        if (!response.error) {
            setEmail(response.data.email);
            await completeStep('contact', response.data.email);
        }
        else {
            toast.error(response.error.message);
        }
    };
    React.useEffect(() => {
        async function setContactIfLoggedIn() {
            if (!customer) {
                return;
            }
            // Post fetch to set contact info
            const response = await fetch(addContactInfoApi, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: customer.email
                })
            });
            const data = await response.json();
            if (!data.error) {
                setEmail(data.email);
                await completeStep('contact', data.email);
            }
            else {
                toast.error(data.error.message);
            }
        }
        setContactIfLoggedIn();
    }, []);
    return (React.createElement("div", { className: "" },
        React.createElement("h4", { className: "mb-4 mt-4" }, _('Contact information')),
        !customer && (React.createElement("div", { className: "mb-4" },
            React.createElement("span", null, _('Already have an account?')),
            ' ',
            React.createElement("a", { className: "text-interactive hover:underline", href: loginUrl }, _('Login')))),
        React.createElement(Form, { id: "checkout-contact-info-form", action: addContactInfoApi, method: "POST", isJSON: true, onSuccess: onSuccess, submitBtn: true, btnText: _('Continue to shipping') },
            React.createElement(Field, { type: "text", formId: "checkout-contact-info-form", name: "email", validationRules: ['notEmpty', 'email'], placeholder: _('Email'), value: email || '' }))));
}
Edit.propTypes = {
    addContactInfoApi: PropTypes.string.isRequired,
    email: PropTypes.string,
    loginUrl: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    customer: PropTypes.shape({
        email: PropTypes.string.isRequired
    })
};
Edit.defaultProps = {
    email: '',
    customer: null
};
//# sourceMappingURL=Edit.js.map