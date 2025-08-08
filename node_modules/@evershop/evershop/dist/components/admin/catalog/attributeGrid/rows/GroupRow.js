import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import { useAlertContext } from '@components/common/modal/Alert';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
export default function GroupRow({ groups }) {
    const { openAlert, closeAlert, dispatchAlert } = useAlertContext();
    const onEdit = (group) => {
        openAlert({
            heading: `Editing ${group.groupName}`,
            content: (React.createElement("div", null,
                React.createElement(Form, { id: "groupEdit", method: "PATCH", action: group.updateApi, submitBtn: false, onSuccess: (response) => {
                        if (response.error) {
                            toast.error(response.error.message);
                        }
                        else {
                            window.location.reload();
                        }
                    }, isJSON: true },
                    React.createElement(Field, { formId: "group-edit", type: "text", name: "group_name", value: group.groupName }),
                    React.createElement(Field, { formId: "group-edit", type: "hidden", name: "group_id", value: group.attributeGroupId })))),
            primaryAction: {
                title: 'Cancel',
                onAction: closeAlert,
                variant: 'critical'
            },
            secondaryAction: {
                title: 'Save',
                onAction: () => {
                    dispatchAlert({
                        type: 'update',
                        payload: { secondaryAction: { isLoading: true } }
                    });
                    document
                        .getElementById('groupEdit')
                        .dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                },
                variant: 'primary',
                isLoading: false
            }
        });
    };
    return (React.createElement("td", null,
        React.createElement("div", { className: "" }, groups.map((group) => (React.createElement("div", { key: group.attributeGroupId },
            React.createElement("a", { href: "#", className: "text-interactive hover:underline", onClick: (e) => {
                    e.preventDefault();
                    onEdit(group);
                } }, group.groupName)))))));
}
GroupRow.propTypes = {
    groups: PropTypes.arrayOf(PropTypes.shape({
        attributeGroupId: PropTypes.string,
        updateApi: PropTypes.string,
        groupName: PropTypes.string
    })).isRequired
};
//# sourceMappingURL=GroupRow.js.map