import Area from '@components/common/Area';
import EmailIcon from '@heroicons/react/outline/MailIcon';
import User from '@heroicons/react/outline/UserIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../lib/locale/translate/_.js';
export default function AccountDetails({ account }) {
    return (React.createElement("div", { className: "account-details" },
        React.createElement("div", { className: "account-details-inner" },
            React.createElement("div", { className: "grid grid-cols-1 gap-4" },
                React.createElement(Area, { id: "accountDetails", coreComponents: [
                        {
                            component: {
                                default: () => (React.createElement("div", { className: "account-details-name flex gap-4" },
                                    React.createElement("div", null,
                                        React.createElement(User, { width: 20, height: 20 })),
                                    React.createElement("div", null, account.fullName)))
                            },
                            sortOrder: 10
                        },
                        {
                            component: {
                                default: () => (React.createElement("div", { className: "account-details-email flex gap-4" },
                                    React.createElement("div", null,
                                        React.createElement(EmailIcon, { width: 20, height: 20 })),
                                    React.createElement("div", null, account.email)))
                            },
                            sortOrder: 15
                        }
                    ] }),
                React.createElement("a", { href: "#", className: "text-interactive underline italic" }, _('Edit'))))));
}
AccountDetails.propTypes = {
    account: PropTypes.shape({
        email: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired
    }).isRequired
};
export const layout = {
    areaId: 'accountPageRight',
    sortOrder: 10
};
export const query = `
  query Query {
    account: currentCustomer {
      uuid
      fullName
      email
    }
  }
`;
//# sourceMappingURL=EditForm.js.map