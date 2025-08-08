import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
import './LoginForm.scss';
import { _ } from '../../../../../lib/locale/translate/_.js';
import Area from '@components/common/Area';
export default function LoginForm({ action, homeUrl, registerUrl, forgotPasswordUrl }) {
    const [error, setError] = React.useState(null);
    return (React.createElement("div", { className: "flex justify-center items-center" },
        React.createElement("div", { className: "login-form flex justify-center items-center" },
            React.createElement("div", { className: "login-form-inner" },
                React.createElement("h1", { className: "text-center" }, _('Login')),
                error && React.createElement("div", { className: "text-critical mb-4" }, error),
                React.createElement(Form, { id: "loginForm", action: action, isJSON: true, method: "POST", onSuccess: (response) => {
                        if (!response.error) {
                            window.location.href = homeUrl;
                        }
                        else {
                            setError(response.error.message);
                        }
                    }, btnText: _('SIGN IN') },
                    React.createElement(Area, { id: "loginFormInner", coreComponents: [
                            {
                                component: { default: Field },
                                props: {
                                    name: 'email',
                                    type: 'text',
                                    placeholder: _('Email'),
                                    validationRules: ['notEmpty', 'email']
                                },
                                sortOrder: 10
                            },
                            {
                                component: { default: Field },
                                props: {
                                    name: 'password',
                                    type: 'password',
                                    placeholder: _('Password'),
                                    validationRules: ['notEmpty']
                                },
                                sortOrder: 20
                            }
                        ] })),
                React.createElement("div", { className: "text-center mt-4 gap-8 flex justify-center" },
                    React.createElement("a", { className: "text-interactive", href: registerUrl }, _('Create an account')),
                    React.createElement("a", { href: forgotPasswordUrl }, _('Forgot your password?')))))));
}
LoginForm.propTypes = {
    action: PropTypes.string.isRequired,
    homeUrl: PropTypes.string.isRequired,
    registerUrl: PropTypes.string.isRequired,
    forgotPasswordUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    homeUrl: url(routeId: "homepage")
    action: url(routeId: "customerLoginJson")
    registerUrl: url(routeId: "register")
    forgotPasswordUrl: url(routeId: "resetPasswordPage")
  }
`;
//# sourceMappingURL=LoginForm.js.map