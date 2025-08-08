import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import React from 'react';
import './Activities.scss';
export default function Activities({ order: { activities = [] } }) {
    const dailyActivities = [];
    activities.forEach((element) => {
        const current = dailyActivities[dailyActivities.length - 1];
        if (!current) {
            dailyActivities.push({
                time: element.createdAt.value,
                date: element.createdAt.date,
                activities: [
                    {
                        comment: element.comment,
                        customerNotified: element.customerNotified,
                        time: element.createdAt.time
                    }
                ]
            });
        }
        else if (DateTime.fromSQL(element.createdAt.value).startOf('day') ===
            DateTime.fromSQL(current.time).startOf('day')) {
            current.activities.push({
                comment: element.comment,
                customerNotified: element.customerNotified,
                time: element.createdAt.time
            });
        }
        else {
            dailyActivities.push({
                date: element.createdAt.date,
                activities: [
                    {
                        comment: element.comment,
                        customerNotified: element.customerNotified,
                        time: element.createdAt.time
                    }
                ]
            });
        }
    });
    return (React.createElement("div", { className: "order-activities" },
        React.createElement("h3", { className: "title" }, "Activities"),
        React.createElement("ul", null, dailyActivities.map((group, i) => (React.createElement("li", { key: i, className: "group" },
            React.createElement("span", null, group.date),
            React.createElement("ul", null, group.activities.map((a, k) => (React.createElement("li", { key: k, className: "flex items-center" },
                React.createElement("span", { className: "dot" }),
                React.createElement("div", { className: "comment" },
                    React.createElement("span", null, a.comment),
                    parseInt(a.customerNotified, 10) === 1 && (React.createElement("span", { className: "customer-notified" }, "Customer was notified"))),
                React.createElement("span", { className: "time" }, a.time)))))))))));
}
Activities.propTypes = {
    order: PropTypes.shape({
        activities: PropTypes.arrayOf(PropTypes.shape({
            comment: PropTypes.string,
            customerNotified: PropTypes.number,
            createdAt: PropTypes.shape({
                value: PropTypes.string,
                timezone: PropTypes.string,
                date: PropTypes.string,
                time: PropTypes.string
            })
        }))
    }).isRequired
};
export const layout = {
    areaId: 'leftSide',
    sortOrder: 30
};
export const query = `
  query Query {
    order(uuid: getContextValue("orderId")) {
      activities {
        comment
        customerNotified
        createdAt {
          value
          timezone
          date: text(format: "LLL dd")
          time: text(format: "t")
        }
      }
    }
  }
`;
//# sourceMappingURL=Activities.js.map