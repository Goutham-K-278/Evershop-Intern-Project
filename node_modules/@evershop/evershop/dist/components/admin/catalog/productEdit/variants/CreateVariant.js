import { SubmitButton } from '@components/admin/catalog/productEdit/variants/SubmitButton';
import { VariantModal } from '@components/admin/catalog/productEdit/variants/VariantModal';
import { Card } from '@components/admin/cms/Card';
import Button from '@components/common/form/Button';
import { Form, useFormDispatch } from '@components/common/form/Form';
import { useModal } from '@components/common/modal/useModal';
import PropTypes from 'prop-types';
import React from 'react';
export function CreateVariant({ productId, variantGroup, createProductApi, addVariantItemApi, productImageUploadUrl, refresh }) {
    const productFormContextDispatch = useFormDispatch();
    const modal = useModal();
    return (React.createElement("div", null,
        React.createElement("div", { className: "mt-8" },
            React.createElement(Button, { title: "Add Variant", onAction: () => {
                    modal.openModal();
                } })),
        modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(Form, { id: "variantForm", submitBtn: false },
                        React.createElement(Card, { title: "Create a new variant" },
                            React.createElement(Card.Session, null,
                                React.createElement(VariantModal, { variantAttributes: variantGroup.attributes, productImageUploadUrl: productImageUploadUrl })),
                            React.createElement(Card.Session, null,
                                React.createElement("div", { className: "flex justify-end" },
                                    React.createElement("div", { className: "grid grid-cols-2 gap-4" },
                                        React.createElement(SubmitButton, { productId: productId, attributes: variantGroup.attributes, createProductApi: createProductApi, addVariantItemApi: addVariantItemApi, productFormContextDispatch: productFormContextDispatch, modal: modal, refresh: refresh }),
                                        React.createElement(Button, { title: "Cancel", variant: "secondary", onAction: modal.closeModal }))))))))))));
}
CreateVariant.propTypes = {
    productId: PropTypes.string.isRequired,
    variantGroup: PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.shape({
            attributeName: PropTypes.string,
            attributeId: PropTypes.number.isRequired,
            attributeCode: PropTypes.string.isRequired,
            attributeValues: PropTypes.arrayOf(PropTypes.shape({
                attributeValueId: PropTypes.string.isRequired,
                attributeValueName: PropTypes.string.isRequired
            }))
        }))
    }).isRequired,
    createProductApi: PropTypes.string.isRequired,
    addVariantItemApi: PropTypes.string.isRequired,
    productImageUploadUrl: PropTypes.string.isRequired,
    refresh: PropTypes.func.isRequired
};
//# sourceMappingURL=CreateVariant.js.map