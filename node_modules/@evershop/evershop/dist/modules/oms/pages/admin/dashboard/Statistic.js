import { Card } from '@components/admin/cms/Card';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistic.scss';
export default function SaleStatistic({ api }) {
    const [data, setData] = useState([]);
    const [period, setPeriod] = useState('monthly');
    const [fetching, setFetching] = useState(true);
    useEffect(() => {
        if (window !== undefined) {
            fetch(`${api}?period=${period}`, {
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
    }, [period]);
    if (fetching) {
        return (React.createElement(Card, { title: "Sale Statistics" },
            React.createElement("div", { className: "skeleton-wrapper-statistic" },
                React.createElement("div", { className: "skeleton" }))));
    }
    else {
        return (React.createElement(Card, { title: "Sale Statistics", actions: [
                {
                    name: 'Daily',
                    onAction: () => setPeriod('daily')
                },
                {
                    name: 'Weekly',
                    onAction: () => setPeriod('weekly')
                },
                {
                    name: 'Monthly',
                    onAction: () => setPeriod('monthly')
                }
            ] },
            React.createElement(Card.Session, null, data.length === 0 ? null : (React.createElement(ResponsiveContainer, { width: "100%", height: 300 },
                React.createElement(AreaChart, { data: data, margin: {
                        top: 5,
                        right: 0,
                        left: -25,
                        bottom: 5
                    } },
                    React.createElement(XAxis, { dataKey: "time" }),
                    React.createElement(YAxis, null),
                    React.createElement(Tooltip, null),
                    React.createElement(Area, { type: "monotone", dataKey: "value", stackId: "1", stroke: "#8884d8", fill: "#8884d8" }),
                    React.createElement(Area, { type: "monotone", dataKey: "count", stackId: "1", stroke: "#82ca9d", fill: "#82ca9d" })))))));
    }
}
SaleStatistic.propTypes = {
    api: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'leftSide',
    sortOrder: 10
};
export const query = `
  query Query {
    api: url(routeId: "salestatistic")    
  }
`;
//# sourceMappingURL=Statistic.js.map