import PropTypes from 'prop-types';
import React from 'react';
export default function CheckoutButton({ action, cartId }) {
    const onClick = (e) => {
        e.preventDefault();
        Fetch(action, false, 'POST', { cartId });
    };
    return (React.createElement("tr", null,
        React.createElement("td", null),
        React.createElement("td", null,
            React.createElement("div", { className: "checkout-button" },
                React.createElement("a", { href: "#", onClick: (e) => onClick(e), className: "btn btn-success" },
                    React.createElement("span", null, "Place order"))))));
}
CheckoutButton.propTypes = {
    action: PropTypes.string.isRequired,
    cartId: PropTypes.string.isRequired
};
//# sourceMappingURL=CheckoutButton.js.map