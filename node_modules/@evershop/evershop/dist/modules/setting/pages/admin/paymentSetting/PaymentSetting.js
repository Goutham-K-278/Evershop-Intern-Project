import SettingMenu from '@components/admin/setting/SettingMenu';
import Area from '@components/common/Area';
import { Form } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
export default function PaymentSetting({ saveSettingApi }) {
    return (React.createElement("div", { className: "main-content-inner" },
        React.createElement("div", { className: "grid grid-cols-6 gap-x-8 grid-flow-row " },
            React.createElement("div", { className: "col-span-2" },
                React.createElement(SettingMenu, null)),
            React.createElement("div", { className: "col-span-4" },
                React.createElement(Form, { id: "paymentSettingForm", method: "POST", action: saveSettingApi, onSuccess: (response) => {
                        if (!response.error) {
                            toast.success('Setting saved');
                        }
                        else {
                            toast.error(response.error.message);
                        }
                    } },
                    React.createElement(Area, { id: "paymentSetting", className: "grid gap-8" }))))));
}
PaymentSetting.propTypes = {
    saveSettingApi: PropTypes.string.isRequired
};
export const layout = {
    areaId: 'content',
    sortOrder: 10
};
export const query = `
  query Query {
    saveSettingApi: url(routeId: "saveSetting")
  }
`;
//# sourceMappingURL=PaymentSetting.js.map