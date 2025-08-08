import { Card } from '@components/admin/cms/Card';
import { useAppState } from '@components/common/context/app';
import PropTypes from 'prop-types';
import React from 'react';
export default function BestCustomers({ listUrl, setting }) {
    const context = useAppState();
    const customers = context.bestCustomers || [];
    return (React.createElement(Card, { title: "Best customers", actions: [
            {
                name: 'All customers',
                onAction: () => {
                    window.location.href = listUrl;
                }
            }
        ] },
        React.createElement(Card.Session, null,
            React.createElement("table", { className: "listing" },
                React.createElement("thead", null,
                    React.createElement("tr", null,
                        React.createElement("th", null, "Full name"),
                        React.createElement("th", null, "Orders"),
                        React.createElement("th", null, "Total"))),
                React.createElement("tbody", null, customers.map((c, i) => {
                    const grandTotal = new Intl.NumberFormat('en', {
                        style: 'currency',
                        currency: setting.storeCurrency
                    }).format(c.total);
                    return (React.createElement("tr", { key: i },
                        React.createElement("td", null,
                            React.createElement("a", { href: c.editUrl || '' }, c.full_name)),
                        React.createElement("td", null, c.orders),
                        React.createElement("td", null, grandTotal)));
                }))))));
}
BestCustomers.propTypes = {
    setting: PropTypes.shape({
        storeCurrency: PropTypes.string
    }).isRequired,
    listUrl: PropTypes.string.isRequired
};
export const query = `
  query Query {
    setting {
      storeCurrency
    }
    listUrl: url(routeId: "productGrid")
  }
`;
//# sourceMappingURL=Bestcustomers.js.map