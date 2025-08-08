import Button from '@components/common/form/Button';
import produce from 'immer';
import PropTypes from 'prop-types';
import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { assign } from '../../../lib/util/assign.js';
import './Alert.scss';
import { Card } from '@components/admin/cms/Card';
const AlertContext = React.createContext();
export const useAlertContext = () => React.useContext(AlertContext);
function reducer(state, action) {
    switch (action.type) {
        case 'close':
            return { ...state, showing: false, closing: false };
        case 'closing':
            return { ...state, showing: true, closing: true };
        case 'open':
            return { ...state, showing: true, closing: false };
        default:
            throw new Error();
    }
}
const alertReducer = produce((draff, action) => {
    switch (action.type) {
        case 'open':
            draff = { ...action.payload };
            return draff;
        case 'remove':
            return {};
        case 'update':
            assign(draff, action.payload);
            return draff;
        default:
            throw new Error();
    }
});
function Alert({ children }) {
    const [alert, dispatchAlert] = useReducer(alertReducer, {});
    const [state, dispatch] = useReducer(reducer, {
        showing: false,
        closing: false
    });
    const openAlert = ({ heading, content, primaryAction, secondaryAction }) => {
        dispatchAlert({
            type: 'open',
            payload: {
                heading,
                content,
                primaryAction,
                secondaryAction
            }
        });
        dispatch({ type: 'open' });
    };
    return (React.createElement(AlertContext.Provider, { value: {
            dispatchAlert,
            openAlert,
            closeAlert: () => dispatch({ type: 'closing' })
        } },
        children,
        state.showing === true &&
            ReactDOM.createPortal(React.createElement("div", { className: state.closing === false
                    ? 'modal-overlay fadeIn'
                    : 'modal-overlay fadeOut', onAnimationEnd: () => {
                    if (state.closing) {
                        dispatch({ type: 'close' });
                        dispatchAlert({ type: 'remove' });
                    }
                } },
                React.createElement("div", { key: state.key, className: "modal-wrapper flex self-center justify-center", "aria-modal": true, "aria-hidden": true, tabIndex: -1, role: "dialog" },
                    React.createElement("div", { className: "modal" },
                        React.createElement("button", { type: "button", className: "modal-close-button text-icon", onClick: () => dispatch({ type: 'closing' }) },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "2rem", viewBox: "0 0 20 20", fill: "currentColor" },
                                React.createElement("path", { fillRule: "evenodd", d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z", clipRule: "evenodd" }))),
                        React.createElement(Card, { title: alert.heading },
                            React.createElement(Card.Session, null, alert.content),
                            (alert.primaryAction !== undefined ||
                                alert.secondaryAction !== undefined) && (React.createElement(Card.Session, null,
                                React.createElement("div", { className: "flex justify-end space-x-4" },
                                    alert.primaryAction && (React.createElement(Button, { ...alert.primaryAction })),
                                    alert.secondaryAction && (React.createElement(Button, { ...alert.secondaryAction }))))))))), document.body)));
}
Alert.propTypes = {
    children: PropTypes.node.isRequired
};
export { Alert };
//# sourceMappingURL=Alert.js.map