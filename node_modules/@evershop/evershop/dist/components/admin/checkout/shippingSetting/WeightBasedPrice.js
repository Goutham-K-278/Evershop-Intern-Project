import { Field } from '@components/common/form/Field';
import PropTypes from 'prop-types';
import React from 'react';
export default function WeightBasedPrice({ lines }) {
    // This is a table with 3 columns: Min Price, Shipping Cost, and Action
    const [rows, setRows] = React.useState(lines.map((line) => ({
        ...line,
        key: Math.random().toString(36).substring(7)
    })));
    return (React.createElement("div", { className: "my-8" },
        React.createElement("table", { className: "border-collapse divide-y" },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", { className: "border-none" }, "Min Weight"),
                    React.createElement("th", { className: "border-none" }, "Shipping Cost"),
                    React.createElement("th", { className: "border-none" }, "Action"))),
            React.createElement("tbody", null, rows.map((row, index) => {
                var _a, _b;
                return (
                // Create a random key for each row
                React.createElement("tr", { key: row.key, className: "border-divider py-8" },
                    React.createElement("td", { className: "border-none" },
                        React.createElement(Field, { name: `weight_based_cost[${index}][min_weight]`, placeholder: "Min Weight", type: "text", value: (_a = row.minWeight) === null || _a === void 0 ? void 0 : _a.value, validationRules: ['notEmpty', 'number'] })),
                    React.createElement("td", { className: "border-none" },
                        React.createElement(Field, { name: `weight_based_cost[${index}][cost]`, placeholder: "Shipping Cost", type: "text", value: (_b = row.cost) === null || _b === void 0 ? void 0 : _b.value, validationRules: ['notEmpty', 'number'] })),
                    React.createElement("td", { className: "border-none" },
                        React.createElement("a", { href: "#", onClick: () => {
                                setRows(rows.filter((r) => r.key !== row.key));
                            }, className: "text-critical" }, "Delete"))));
            })),
            React.createElement("tfoot", null,
                React.createElement("tr", null,
                    React.createElement("td", { colSpan: "3", className: "border-none" },
                        React.createElement("a", { href: "#", className: "text-interactive", onClick: () => {
                                setRows([
                                    ...rows,
                                    {
                                        min_price: '',
                                        shipping_cost: '',
                                        key: Math.random().toString(36).substring(7)
                                    }
                                ]);
                            } }, "+ Add Line")))))));
}
WeightBasedPrice.propTypes = {
    lines: PropTypes.arrayOf(PropTypes.shape({
        minWeight: PropTypes.shape({
            value: PropTypes.number.isRequired
        }),
        cost: PropTypes.shape({
            value: PropTypes.number.isRequired
        })
    }))
};
WeightBasedPrice.defaultProps = {
    lines: []
};
//# sourceMappingURL=WeightBasedPrice.js.map