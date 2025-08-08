import PropTypes from 'prop-types';
import React from 'react';
import './Card.scss';
function Card({ title, actions = [], subdued = false, children }) {
    return (React.createElement("div", { className: subdued ? 'card shadow subdued' : 'card shadow' },
        (title || actions.length > 0) && (React.createElement("div", { className: "flex justify-between card-header" },
            title && React.createElement("h2", { className: "card-title" }, title),
            actions.length > 0 && (React.createElement("div", { className: "flex space-x-3" }, actions.map((action, index) => {
                const className = {
                    primary: 'text-primary',
                    critical: 'text-critical',
                    interactive: 'text-interactive',
                    secondary: 'text-secondary'
                };
                return (React.createElement("div", { key: index, className: "card-action" },
                    React.createElement("a", { href: "#", onClick: (e) => {
                            e.preventDefault();
                            if (action.onAction)
                                action.onAction.call();
                        }, className: className[action.variant ? action.variant : 'interactive'] }, action.name)));
            }))))),
        children));
}
Card.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        onAction: PropTypes.func,
        variant: PropTypes.string,
        name: PropTypes.string
    })),
    children: PropTypes.node.isRequired,
    subdued: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Card.defaultProps = {
    actions: [],
    subdued: false,
    title: ''
};
const Session = function Session({ actions = [], title, children }) {
    return (React.createElement("div", { className: "card-section border-b box-border" },
        (title || actions.length > 0) && (React.createElement("div", { className: "flex justify-between card-section-header mb-4" },
            title && React.createElement("h3", { className: "card-session-title" }, title),
            actions.length > 0 && (React.createElement("div", { className: "flex space-x-3" }, actions.map((action, index) => {
                const className = {
                    primary: 'text-primary',
                    critical: 'text-critical',
                    interactive: 'text-interactive',
                    secondary: 'text-secondary'
                };
                return (React.createElement("div", { key: index, className: "card-action" },
                    React.createElement("a", { href: "#", onClick: (e) => {
                            e.preventDefault();
                            if (action.onAction)
                                action.onAction.call();
                        }, className: className[action.variant ? action.variant : 'interactive'] }, action.name)));
            }))))),
        React.createElement("div", { className: "card-session-content pt-lg" }, children)));
};
Session.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        onAction: PropTypes.func,
        variant: PropTypes.string,
        name: PropTypes.string
    })),
    children: PropTypes.node,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
Session.defaultProps = {
    actions: [],
    title: '',
    children: null
};
Card.Session = Session;
export { Card };
//# sourceMappingURL=Card.js.map