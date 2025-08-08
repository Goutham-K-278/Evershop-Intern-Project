import { Card } from '@components/admin/cms/Card';
import Dot from '@components/common/Dot';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';
import './Lifetimesales.scss';
const COLORS = ['#aee9d1', '#fed3d1', '#a4e8f2'];
export default function LifetimeSale({ api }) {
    const [data, setData] = React.useState({});
    const [fetching, setFetching] = React.useState(true);
    const { orders, total, completed_percentage, cancelled_percentage } = data;
    const chartData = [
        { name: 'Completed', value: completed_percentage },
        { name: 'Cancelled', value: cancelled_percentage },
        {
            name: 'Others',
            value: 100 - completed_percentage - cancelled_percentage
        }
    ];
    React.useEffect(() => {
        if (window !== undefined) {
            fetch(api, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => response.json())
                .then((json) => {
                setData(json);
                setFetching(false);
            })
                .catch((error) => {
                toast.error(error.message);
            });
        }
    }, []);
    if (fetching) {
        return (React.createElement(Card, { title: "Lifetime Sales" },
            React.createElement(Card.Session, null,
                React.createElement("div", { className: "skeleton-wrapper-lifetime" },
                    React.createElement("div", { className: "skeleton" }),
                    React.createElement("div", { className: "skeleton" }),
                    React.createElement("div", { className: "skeleton" }),
                    React.createElement("div", { className: "skeleton" }))),
            React.createElement(Card.Session, null,
                React.createElement("div", { className: "skeleton-wrapper-lifetime" },
                    React.createElement("div", { className: "skeleton-chart" })))));
    }
    else {
        return (React.createElement(Card, { title: "Lifetime Sales" },
            React.createElement(Card.Session, null,
                React.createElement("div", { className: "grid grid-cols-1 gap-4" },
                    React.createElement("div", { className: "flex space-x-4 items-center" },
                        React.createElement(Dot, { variant: "info" }),
                        React.createElement("div", { className: "self-center" },
                            orders,
                            " orders")),
                    React.createElement("div", { className: "flex space-x-4 items-center" },
                        React.createElement(Dot, { variant: "info" }),
                        React.createElement("div", { className: "self-center" },
                            total,
                            " lifetime sale")),
                    React.createElement("div", { className: "flex space-x-4 items-center" },
                        React.createElement(Dot, { variant: "success" }),
                        React.createElement("div", { className: "self-center" },
                            completed_percentage,
                            "% of orders completed")),
                    React.createElement("div", { className: "flex space-x-4 items-center" },
                        React.createElement(Dot, { variant: "critical" }),
                        React.createElement("div", { className: "self-center" },
                            cancelled_percentage,
                            "% of orders cancelled")))),
            React.createElement(Card.Session, null,
                React.createElement("div", { style: { height: '200px' } },
                    React.createElement(ResponsiveContainer, { width: "100%", height: "100%" },
                        React.createElement(PieChart, null,
                            React.createElement(Pie, { data: chartData, labelLine: false, fill: "#8884d8", dataKey: "value", label: true }, chartData.map((entry, index) => (React.createElement(Cell, { key: `cell-${index}`, fill: COLORS[index % COLORS.length] }))))))))));
    }
}
LifetimeSale.propTypes = {
    api: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 10
};
export const query = `
  query Query {
    api: url(routeId: "lifetimesales")    
  }
`;
//# sourceMappingURL=Lifetimesales.js.map