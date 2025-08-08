import { Card } from '@components/admin/cms/Card';
import Area from '@components/common/Area';
import PropTypes from 'prop-types';
import React from 'react';
function FullName({ fullName }) {
    return (React.createElement(Card.Session, { title: "Full Name" },
        React.createElement("div", null,
            React.createElement("span", null, fullName))));
}
FullName.propTypes = {
    fullName: PropTypes.string.isRequired
};
function Group({ group }) {
    return (React.createElement(Card.Session, { title: "Group" },
        React.createElement("div", null,
            React.createElement("span", null, (group === null || group === void 0 ? void 0 : group.groupName) || 'Default'))));
}
Group.propTypes = {
    group: PropTypes.shape({
        groupName: PropTypes.string
    }).isRequired
};
function Email({ email }) {
    return (React.createElement(Card.Session, { title: "Email" },
        React.createElement("div", null,
            React.createElement("span", null, email))));
}
Email.propTypes = {
    email: PropTypes.string.isRequired
};
function Status({ status }) {
    return (React.createElement(Card.Session, { title: "Status" },
        React.createElement("div", null,
            React.createElement("span", null, parseInt(status, 10) === 1 ? 'Enabled' : 'Disabled'))));
}
Status.propTypes = {
    status: PropTypes.number.isRequired
};
export default function General({ customer }) {
    return (React.createElement(Card, null,
        React.createElement(Area, { id: "customerEditInformation", coreComponents: [
                {
                    component: {
                        default: () => React.createElement(FullName, { fullName: customer.fullName })
                    },
                    sortOrder: 10
                },
                {
                    component: { default: () => React.createElement(Email, { email: customer.email }) },
                    sortOrder: 15
                },
                {
                    component: { default: () => React.createElement(Group, { group: customer.group }) },
                    sortOrder: 20
                },
                {
                    component: { default: () => React.createElement(Status, { status: customer.status }) },
                    sortOrder: 25
                }
            ] })));
}
General.propTypes = {
    customer: PropTypes.shape({
        email: PropTypes.string,
        fullName: PropTypes.string,
        group: PropTypes.shape({
            groupName: PropTypes.string
        }),
        status: PropTypes.number
    }).isRequired
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 10
};
export const query = `
  query Query {
    customer(id: getContextValue("customerUuid", null)) {
      customerId
      fullName
      email
      status
      group {
        groupName
      }
    }
  }
`;
//# sourceMappingURL=General.js.map