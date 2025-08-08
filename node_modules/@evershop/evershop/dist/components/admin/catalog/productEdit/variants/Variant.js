import PropTypes from 'prop-types';
import React from 'react';
import { EditVariant } from './EditVariant';
import { VariantType } from './VariantType';
export function Variant({ variant, productImageUploadUrl, refresh, variantGroup }) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    return (React.createElement("tr", null,
        React.createElement("td", null,
            React.createElement("img", { style: { maxWidth: '50px', height: 'auto' }, src: (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.product) === null || _a === void 0 ? void 0 : _a.image) === null || _b === void 0 ? void 0 : _b.url, alt: "" })),
        variant.attributes.map((a) => (React.createElement("td", { key: a.attributeId },
            React.createElement("label", null, a.optionText || '--')))),
        React.createElement("td", null,
            React.createElement("a", { href: variant.product.editUrl, className: "hover:text-interactive" }, (_c = variant.product) === null || _c === void 0 ? void 0 : _c.sku)),
        React.createElement("td", null, (_f = (_e = (_d = variant.product) === null || _d === void 0 ? void 0 : _d.price) === null || _e === void 0 ? void 0 : _e.regular) === null || _f === void 0 ? void 0 : _f.text),
        React.createElement("td", null, (_h = (_g = variant.product) === null || _g === void 0 ? void 0 : _g.inventory) === null || _h === void 0 ? void 0 : _h.qty),
        React.createElement("td", null, ((_j = variant.product) === null || _j === void 0 ? void 0 : _j.status) === 1 ? (React.createElement("span", { className: "text-success" }, "Enabled")) : (React.createElement("span", { className: "text-critical" }, "Disabled"))),
        React.createElement("td", null,
            React.createElement(EditVariant, { variant: variant, productImageUploadUrl: productImageUploadUrl, refresh: refresh, variantGroup: variantGroup }))));
}
Variant.propTypes = {
    variant: VariantType.isRequired,
    productImageUploadUrl: PropTypes.string.isRequired,
    refresh: PropTypes.func.isRequired,
    variantGroup: PropTypes.shape({
        attributes: PropTypes.arrayOf(PropTypes.shape({
            attributeId: PropTypes.number.isRequired,
            attributeName: PropTypes.string.isRequired,
            attributeCode: PropTypes.string.isRequired,
            options: PropTypes.arrayOf(PropTypes.shape({
                optionId: PropTypes.number.isRequired,
                optionText: PropTypes.string.isRequired
            })).isRequired
        })).isRequired
    }).isRequired
};
//# sourceMappingURL=Variant.js.map