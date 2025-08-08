import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
import './RegisterForm.scss';
import { _ } from '../../../../../lib/locale/translate/_.js';
import Area from '@components/common/Area';
export default function RegisterForm({ action, homeUrl, loginApi, loginUrl }) {
    const [error, setError] = React.useState(null);
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    return (React.createElement("div", { className: "flex justify-center items-center" },
        React.createElement("div", { className: "register-form flex justify-center items-center" },
            React.createElement("div", { className: "register-form-inner" },
                React.createElement("h1", { className: "text-center" }, _('Create A New Account')),
                error && React.createElement("div", { className: "text-critical mb-4" }, error),
                React.createElement(Form, { id: "registerForm", action: action, isJSON: true, method: "POST", onSuccess: async (response) => {
                        if (!response.error) {
                            // Log the customer in
                            const loginResponse = await fetch(loginApi, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify({
                                    email,
                                    password
                                })
                            });
                            const loginResponseJson = await loginResponse.json();
                            if (loginResponseJson.error) {
                                setError(loginResponseJson.error.message);
                            }
                            else {
                                window.location.href = homeUrl;
                            }
                        }
                        else {
                            setError(response.error.message);
                        }
                    }, btnText: _('SIGN UP') },
                    React.createElement(Area, { id: "customerRegisterForm", coreComponents: [
                            {
                                component: {
                                    default: (React.createElement(Field, { name: "full_name", type: "text", placeholder: _('Full Name'), validationRules: ['notEmpty'] }))
                                },
                                sortOrder: 10
                            },
                            {
                                component: {
                                    default: (React.createElement(Field, { name: "email", type: "text", placeholder: _('Email'), validationRules: ['notEmpty', 'email'], onChange: (e) => {
                                            setEmail(e.target.value);
                                        } }))
                                },
                                sortOrder: 20
                            },
                            {
                                component: {
                                    default: (React.createElement(Field, { name: "password", type: "password", placeholder: _('Password'), validationRules: ['notEmpty'], onChange: (e) => {
                                            setPassword(e.target.value);
                                        } }))
                                },
                                sortOrder: 30
                            }
                        ] })),
                React.createElement("div", { className: "text-center mt-4" },
                    React.createElement("span", null,
                        _('Already have an account?'),
                        React.createElement("a", { className: "text-interactive", href: loginUrl },
                            ' ',
                            _('Login'),
                            ' ')))))));
}
RegisterForm.propTypes = {
    action: PropTypes.string.isRequired,
    homeUrl: PropTypes.string.isRequired,
    loginApi: PropTypes.string.isRequired,
    loginUrl: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    homeUrl: url(routeId: "homepage")
    action: url(routeId: "createCustomer")
    loginApi: url(routeId: "customerLoginJson")
    loginUrl: url(routeId: "login")
  }
`;
//# sourceMappingURL=RegisterForm.js.map