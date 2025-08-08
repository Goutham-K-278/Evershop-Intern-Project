import ProductMediaManager from '@components/admin/catalog/productEdit/media/ProductMediaManager';
import { Field } from '@components/common/form/Field';
import { useFormContext } from '@components/common/form/Form';
import Spinner from '@components/common/Spinner';
import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'urql';
const AttributesQuery = `
  query Query($filters: [FilterInput]) {
    attributes(filters: $filters) {
      items {
        attributeId
        attributeCode
        attributeName
        options {
          value: attributeOptionId
          text: optionText
        }
      }
    }
  }
`;
export function VariantModal({ variant, variantAttributes, productImageUploadUrl }) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const formContext = useFormContext();
    const image = (_a = variant === null || variant === void 0 ? void 0 : variant.product) === null || _a === void 0 ? void 0 : _a.image;
    let gallery = ((_b = variant === null || variant === void 0 ? void 0 : variant.product) === null || _b === void 0 ? void 0 : _b.gallery) || [];
    if (image) {
        gallery = [image].concat(gallery);
    }
    const [result] = useQuery({
        query: AttributesQuery,
        variables: {
            filters: [
                {
                    key: 'code',
                    operation: 'in',
                    value: variantAttributes.map((a) => a.attributeCode).join(',')
                }
            ]
        }
    });
    const { data, fetching, error } = result;
    if (fetching) {
        return (React.createElement("div", { className: "p-3 flex justify-center items-center border rounded border-divider" },
            React.createElement(Spinner, { width: 30, height: 30 })));
    }
    if (error) {
        return React.createElement("p", { className: "text-critical" }, error.message);
    }
    return (React.createElement("div", { className: "variant-item pb-6 border-b border-solid border-divider mb-6 last:border-b-0 last:pb-0" },
        React.createElement("div", { className: "grid grid-cols-2 gap-x-4" },
            React.createElement("div", { className: "col-span-1" },
                React.createElement(ProductMediaManager, { id: "images", productImageUploadUrl: productImageUploadUrl, productImages: gallery })),
            React.createElement("div", { className: "col-span-1" },
                React.createElement("div", { className: "grid grid-cols-2 gap-x-4 border-b border-divider pb-6 mb-6" }, (_c = data === null || data === void 0 ? void 0 : data.attributes) === null || _c === void 0 ? void 0 : _c.items.map((a, index) => {
                    var _a, _b;
                    return (React.createElement("div", { key: a.attributeId, className: "mt-4 col" },
                        React.createElement("div", null,
                            React.createElement("label", null, a.attributeName)),
                        React.createElement("input", { type: "hidden", name: `attributes[${index}][attribute_code]`, value: a.attributeCode }),
                        React.createElement("input", { type: "hidden", name: a.attributeCode, value: (_a = formContext.fields.find((f) => f.name === `attributes[${index}][value]`)) === null || _a === void 0 ? void 0 : _a.value }),
                        React.createElement(Field, { name: `attributes[${index}][value]`, validationRules: ['notEmpty'], value: (_b = variant === null || variant === void 0 ? void 0 : variant.attributes.find((v) => v.attributeCode === a.attributeCode)) === null || _b === void 0 ? void 0 : _b.optionId, options: a.options, type: "select" })));
                })),
                React.createElement("div", { className: "grid grid-cols-3 gap-x-4 border-b border-divider pb-6 mb-6" },
                    React.createElement("div", null,
                        React.createElement("div", null, "SKU"),
                        React.createElement(Field, { name: "sku", formId: "product-edit-form", validationRules: ['notEmpty'], value: (_d = variant === null || variant === void 0 ? void 0 : variant.product) === null || _d === void 0 ? void 0 : _d.sku, type: "text" })),
                    React.createElement("div", null,
                        React.createElement("div", null, "Qty"),
                        React.createElement(Field, { name: "qty", formId: "product-edit-form", validationRules: ['notEmpty'], value: (_f = (_e = variant === null || variant === void 0 ? void 0 : variant.product) === null || _e === void 0 ? void 0 : _e.inventory) === null || _f === void 0 ? void 0 : _f.qty, type: "text" }))),
                React.createElement("div", { className: "grid grid-cols-3 gap-x-4" },
                    React.createElement("div", null,
                        React.createElement("div", null, "Status"),
                        React.createElement(Field, { name: "status", formId: "product-edit-form", value: (_g = variant === null || variant === void 0 ? void 0 : variant.product) === null || _g === void 0 ? void 0 : _g.status, type: "toggle" })),
                    React.createElement("div", null,
                        React.createElement("div", null, "Visibility"),
                        React.createElement(Field, { name: "visibility", formId: "product-edit-form", value: (_h = variant === null || variant === void 0 ? void 0 : variant.product) === null || _h === void 0 ? void 0 : _h.visibility, type: "toggle" })))))));
}
VariantModal.propTypes = {
    variant: PropTypes.shape({
        product: PropTypes.shape({
            image: PropTypes.string,
            gallery: PropTypes.arrayOf(PropTypes.string),
            sku: PropTypes.string,
            inventory: PropTypes.shape({
                qty: PropTypes.number
            }),
            status: PropTypes.number,
            visibility: PropTypes.number,
            attributes: PropTypes.arrayOf(PropTypes.shape({
                attributeCode: PropTypes.string,
                optionId: PropTypes.number
            }))
        }),
        attributes: PropTypes.arrayOf(PropTypes.shape({
            attributeCode: PropTypes.string,
            optionId: PropTypes.number
        }))
    }),
    variantAttributes: PropTypes.arrayOf(PropTypes.shape({
        attributeId: PropTypes.number,
        attributeName: PropTypes.string,
        attributeCode: PropTypes.string,
        options: PropTypes.arrayOf(PropTypes.shape({
            optionId: PropTypes.number,
            optionText: PropTypes.string
        }))
    })),
    productImageUploadUrl: PropTypes.string.isRequired
};
VariantModal.defaultProps = {
    variant: null,
    variantAttributes: []
};
//# sourceMappingURL=VariantModal.js.map