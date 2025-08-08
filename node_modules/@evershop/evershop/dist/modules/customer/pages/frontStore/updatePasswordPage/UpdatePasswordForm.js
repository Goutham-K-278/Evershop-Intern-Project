import PropTypes from 'prop-types';
import React from 'react';
import './UpdatePasswordForm.scss';
import Button from '@components/common/form/Button';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import { _ } from '../../../../../lib/locale/translate/_.js';
function Success() {
    return (React.createElement("div", { className: "flex justify-center items-center" },
        React.createElement("div", { className: "update-password-form flex justify-center items-center" },
            React.createElement("div", { className: "update-password-form-inner" },
                React.createElement("p", { className: "text-center text-success" }, _('Your password has been updated. You can now login with your new password.'))))));
}
function UpdateForm({ action, onSuccess }) {
    const [error, setError] = React.useState(null);
    const [token, setToken] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    React.useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tokenParam = urlParams.get('token');
        setToken(tokenParam);
    }, []);
    return (React.createElement("div", { className: "flex justify-center items-center" },
        React.createElement("div", { className: "update-password-form flex justify-center items-center" },
            React.createElement("div", { className: "update-password-form-inner" },
                React.createElement("h2", { className: "text-center mb-8" }, _('Enter your new password')),
                error && React.createElement("div", { className: "text-critical mb-4" }, error),
                React.createElement(Form, { id: "updatePasswordForm", action: action, isJSON: true, method: "POST", onStart: () => {
                        setLoading(true);
                    }, onComplete: () => {
                        setLoading(false);
                    }, onSuccess: (response) => {
                        if (!response.error) {
                            onSuccess();
                        }
                        else {
                            setError(response.error.message);
                        }
                    }, submitBtn: false },
                    React.createElement(Field, { name: "password", type: "password", placeholder: _('Password'), validationRules: ['notEmpty'] }),
                    React.createElement(Field, { name: "token", type: "hidden", value: token }),
                    React.createElement("div", { className: "form-submit-button flex border-t border-divider mt-4 pt-4" },
                        React.createElement(Button, { title: _('UPDATE PASSWORD'), type: "submit", onAction: () => {
                                document
                                    .getElementById('updatePasswordForm')
                                    .dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                            }, isLoading: loading })))))));
}
UpdateForm.propTypes = {
    action: PropTypes.string.isRequired,
    onSuccess: PropTypes.func.isRequired
};
export default function UpdatePasswordForm({ action }) {
    const [success, setSuccess] = React.useState(null);
    return success ? (React.createElement(Success, null)) : (React.createElement(UpdateForm, { action: action, onSuccess: () => {
            setSuccess(true);
        } }));
}
UpdatePasswordForm.propTypes = {
    action: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    action: url(routeId: "updatePassword")
  }
`;
//# sourceMappingURL=UpdatePasswordForm.js.map