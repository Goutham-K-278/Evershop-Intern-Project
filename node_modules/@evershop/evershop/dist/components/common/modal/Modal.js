import { Card } from '@components/admin/cms/Card';
import Button from '@components/common/form/Button';
import PropTypes from 'prop-types';
import React from 'react';
import './Alert.scss';
function Modal({ modal, title, children, primaryAction }) {
    if (modal.state.showing) {
        return (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(Card, { title: title },
                        React.createElement("div", { className: "modal-content" }, children),
                        React.createElement(Card.Session, null,
                            React.createElement("div", { className: "flex justify-end gap-8" },
                                React.createElement(Button, { title: "Close", variant: "secondary", onAction: modal.closeModal() }),
                                primaryAction && (React.createElement(Button, { title: primaryAction.title, variant: "primary", onAction: primaryAction.onAction })))))))));
    }
}
Modal.propTypes = {
    modal: PropTypes.shape({
        state: PropTypes.shape({
            showing: PropTypes.bool.isRequired
        }).isRequired,
        className: PropTypes.string.isRequired,
        closeModal: PropTypes.func.isRequired,
        onAnimationEnd: PropTypes.func.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    primaryAction: PropTypes.shape({
        title: PropTypes.string.isRequired,
        onAction: PropTypes.func.isRequired
    })
};
Modal.defaultProps = {
    primaryAction: null
};
export default Modal;
//# sourceMappingURL=Modal.js.map