import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
import './ResetPasswordForm.scss';
import { _ } from '../../../../../lib/locale/translate/_.js';
import Button from '@components/common/form/Button';
function Success() {
    return (React.createElement("div", { className: "flex justify-center items-center" },
        React.createElement("div", { className: "reset-password-form flex justify-center items-center" },
            React.createElement("div", { className: "reset-password-form-inner" },
                React.createElement("p", { className: "text-center text-success" }, _('We have sent you an email with a link to reset your password. Please check your inbox.'))))));
}
function ResetForm({ action, onSuccess }) {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    return (React.createElement("div", { className: "flex justify-center items-center" },
        React.createElement("div", { className: "reset-password-form flex justify-center items-center" },
            React.createElement("div", { className: "reset-password-form-inner" },
                React.createElement("h1", { className: "text-center" }, _('Enter your email address')),
                error && React.createElement("div", { className: "text-critical mb-4" }, error),
                React.createElement(Form, { id: "resetPasswordForm", action: action, isJSON: true, method: "POST", onStart: () => {
                        setLoading(true);
                    }, onSuccess: (response) => {
                        if (!response.error) {
                            onSuccess();
                        }
                        else {
                            setError(response.error.message);
                        }
                    }, onComplete: () => {
                        setLoading(false);
                    }, submitBtn: false },
                    React.createElement(Field, { name: "email", type: "text", placeholder: _('Email'), validationRules: ['notEmpty', 'email'] }),
                    React.createElement("div", { className: "form-submit-button flex border-t border-divider mt-4 pt-4" },
                        React.createElement(Button, { title: _('RESET PASSWORD'), type: "submit", onAction: () => {
                                document
                                    .getElementById('resetPasswordForm')
                                    .dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                            }, isLoading: loading })))))));
}
ResetForm.propTypes = {
    action: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired
};
export default function ResetPasswordForm({ action }) {
    const [success, setSuccess] = React.useState(null);
    return success ? (React.createElement(Success, null)) : (React.createElement(ResetForm, { action: action, onSuccess: () => {
            setSuccess(true);
        } }));
}
ResetPasswordForm.propTypes = {
    action: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    action: url(routeId: "resetPassword")
  }
`;
//# sourceMappingURL=ResetPasswordForm.js.map