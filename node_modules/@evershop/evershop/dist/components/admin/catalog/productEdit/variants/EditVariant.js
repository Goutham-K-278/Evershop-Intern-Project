import { VariantModal } from '@components/admin/catalog/productEdit/variants/VariantModal';
import { Card } from '@components/admin/cms/Card';
import Button from '@components/common/form/Button';
import { Form } from '@components/common/form/Form';
import { useAlertContext } from '@components/common/modal/Alert';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
export function EditVariant({ variant, productImageUploadUrl, refresh, variantGroup }) {
    const { openAlert, closeAlert } = useAlertContext();
    const formId = `variantForm-${variant.id}`;
    const openModal = (e) => {
        e.persist();
        openAlert({
            heading: 'Edit variant',
            content: (React.createElement(Form, { id: formId, method: "PATCH", submitBtn: false, action: variant.product.updateApi, onSuccess: (response) => {
                    if (!response.error) {
                        refresh();
                        closeAlert();
                    }
                    else {
                        toast.error(response.error.message);
                    }
                } },
                React.createElement(Card, null,
                    React.createElement(Card.Session, null,
                        React.createElement(VariantModal, { variantAttributes: variantGroup.attributes, productImageUploadUrl: productImageUploadUrl, variant: variant })),
                    React.createElement(Card.Session, null,
                        React.createElement("div", { className: "flex justify-end" },
                            React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                                React.createElement(Button, { title: "Save", variant: "primary", onAction: () => {
                                        document.getElementById(formId).dispatchEvent(new Event('submit', {
                                            cancelable: true,
                                            bubbles: true
                                        }));
                                    } }),
                                React.createElement(Button, { title: "Cancel", variant: "secondary", onAction: closeAlert })))))))
        });
    };
    return (React.createElement("div", null,
        React.createElement("a", { className: "button", onClick: (e) => {
                e.preventDefault();
                openModal(e);
            }, href: "#" }, "Edit")));
}
EditVariant.propTypes = {
    productImageUploadUrl: PropTypes.string.isRequired,
    refresh: PropTypes.func.isRequired,
    variant: PropTypes.shape({
        product: PropTypes.shape({
            updateApi: PropTypes.string.isRequired
        }),
        id: PropTypes.string.isRequired
    }).isRequired,
    variantGroup: PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.shape({
            attributeId: PropTypes.number,
            attributeName: PropTypes.string,
            attributeCode: PropTypes.string,
            options: PropTypes.arrayOf(PropTypes.shape({
                optionId: PropTypes.number,
                optionText: PropTypes.string
            }))
        }))
    }).isRequired
};
//# sourceMappingURL=EditVariant.js.map