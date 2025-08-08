import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import PropTypes from 'prop-types';
import React from 'react';
import AttributeGroupConditionSelector from './AttributeGroupConditionSelector';
import CategoryConditionSelector from './CategoryConditionSelector';
import CollectionConditionSelector from './CollectionConditionSelector';
import { compareKeyList } from './CompareKeyList';
import { compareOperatorList } from './CompareOperatorList';
import PriceConditionSelector from './PriceConditionSelector';
import SkuConditionSelector from './SkuConditionSelector';
export function RequiredProducts({ requiredProducts }) {
    const [products, setProducts] = React.useState(() => requiredProducts.map((p) => ({ ...p, editable: false })));
    const addProduct = (e) => {
        e.persist();
        e.preventDefault();
        setProducts(products.concat({
            key: 'category',
            operator: '',
            value: '',
            qty: '',
            editable: true
        }));
    };
    const removeProduct = (e, index) => {
        e.persist();
        e.preventDefault();
        const newProducts = products.filter((_, i) => i !== index);
        setProducts(newProducts);
    };
    const updateProduct = (e, key, index) => {
        e.persist();
        e.preventDefault();
        const newProducts = products.map((p, i) => {
            if (i === index) {
                if (key === 'key' && e.target.value === p.key) {
                    return {
                        ...p,
                        [key]: e.target.value,
                        operator: '',
                        value: ''
                    };
                }
                else {
                    return {
                        ...p,
                        [key]: e.target.value
                    };
                }
            }
            else {
                return p;
            }
        });
        setProducts(newProducts);
    };
    return (React.createElement("div", { style: { marginTop: '1rem', marginBottom: '1rem' } },
        React.createElement("div", null,
            React.createElement("span", null, "Order must contains product matched bellow conditions(All)")),
        React.createElement("table", { className: "table table-auto", style: { marginTop: 0 } },
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null,
                        React.createElement("span", null, "Key")),
                    React.createElement("th", null,
                        React.createElement("span", null, "Operator")),
                    React.createElement("th", null,
                        React.createElement("span", null, "Value")),
                    React.createElement("th", null,
                        React.createElement("span", null, "Minimum quantity")),
                    React.createElement("th", null, " "))),
            React.createElement("tbody", null, products.map((p, i) => {
                var _a, _b;
                return (React.createElement("tr", { key: `${p.key}-${p.operator}-${p.value}-${p.qty}-${i}` },
                    React.createElement("td", null,
                        React.createElement("div", { className: "form-field-container dropdown" },
                            React.createElement("div", { className: "field-wrapper" },
                                p.editable ? (React.createElement("select", { name: `condition[required_products][${i}][key]`, className: "form-control", value: p.key, onChange: (e) => updateProduct(e, 'key', i), disabled: !p.editable },
                                    React.createElement(Area, { id: "couponTargetProductKey", noOuter: true, coreComponents: compareKeyList.map((c, index) => ({
                                            component: {
                                                default: React.createElement("option", { value: c.key }, c.label)
                                            },
                                            props: {},
                                            sortOrder: 10 * index
                                        })) }))) : (React.createElement(React.Fragment, null,
                                    React.createElement("input", { type: "hidden", name: `condition[required_products][${i}][key]`, readOnly: true, value: p.key }),
                                    React.createElement("input", { type: "text", readOnly: true, value: ((_a = compareKeyList.find((c) => c.key === p.key)) === null || _a === void 0 ? void 0 : _a.label) || 'Unknown' }))),
                                React.createElement("div", { className: "field-border" }),
                                React.createElement("div", { className: "field-suffix" },
                                    React.createElement("svg", { viewBox: "0 0 20 20", width: "1rem", height: "1.25rem", focusable: "false", "aria-hidden": "true" },
                                        React.createElement("path", { d: "m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z" })))))),
                    React.createElement("td", null,
                        React.createElement("div", { className: "form-field-container dropdown" },
                            React.createElement("div", { className: "field-wrapper" },
                                p.editable ? (React.createElement("select", { name: `condition[required_products][${i}][operator]`, className: "form-control", value: p.operator, onChange: (e) => updateProduct(e, 'operator', i) },
                                    React.createElement(Area, { id: "couponTargetProductOperator", noOuter: true, coreComponents: compareOperatorList.map((c, index) => ({
                                            component: {
                                                default: c.allowKeys.includes(p.key) ? (React.createElement("option", { value: c.key }, c.label)) : (React.createElement(React.Fragment, null, null))
                                            },
                                            props: {},
                                            sortOrder: 10 * index
                                        })) }))) : (React.createElement(React.Fragment, null,
                                    React.createElement("input", { type: "hidden", name: `condition[required_products][${i}][operator]`, readOnly: true, value: p.operator }),
                                    React.createElement("input", { type: "text", readOnly: true, value: ((_b = compareOperatorList.find((c) => c.key === p.operator)) === null || _b === void 0 ? void 0 : _b.label) || 'Unknown' }))),
                                React.createElement("div", { className: "field-border" }),
                                React.createElement("div", { className: "field-suffix" },
                                    React.createElement("svg", { viewBox: "0 0 20 20", width: "1rem", height: "1.25rem", focusable: "false", "aria-hidden": "true" },
                                        React.createElement("path", { d: "m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z" })))))),
                    React.createElement("td", null,
                        typeof p.value === 'string' && (React.createElement("input", { type: "hidden", name: `condition[required_products][${i}][value]`, value: p.value })),
                        Array.isArray(p.value) && (React.createElement(React.Fragment, null, p.value.map((v, j) => (React.createElement("input", { key: j, type: "hidden", name: `condition[required_products][${i}][value][]`, value: v }))))),
                        React.createElement(Area, { id: "couponProductConditionValue", noOuter: true, coreComponents: [
                                {
                                    component: {
                                        default: (React.createElement(CategoryConditionSelector, { condition: p, setCondition: (condition) => {
                                                const newProducts = products.map((p, index) => {
                                                    if (index === i) {
                                                        return condition;
                                                    }
                                                    else {
                                                        return p;
                                                    }
                                                });
                                                setProducts(newProducts);
                                            } }))
                                    },
                                    props: {},
                                    sortOrder: 10
                                },
                                {
                                    component: {
                                        default: (React.createElement(CollectionConditionSelector, { condition: p, setCondition: (condition) => {
                                                const newProducts = products.map((p, index) => {
                                                    if (index === i) {
                                                        return condition;
                                                    }
                                                    else {
                                                        return p;
                                                    }
                                                });
                                                setProducts(newProducts);
                                            } }))
                                    },
                                    props: {},
                                    sortOrder: 10
                                },
                                {
                                    component: {
                                        default: (React.createElement(SkuConditionSelector, { condition: p, setCondition: (condition) => {
                                                const newProducts = products.map((p, index) => {
                                                    if (index === i) {
                                                        return condition;
                                                    }
                                                    else {
                                                        return p;
                                                    }
                                                });
                                                setProducts(newProducts);
                                            } }))
                                    },
                                    props: {},
                                    sortOrder: 10
                                },
                                {
                                    component: {
                                        default: (React.createElement(AttributeGroupConditionSelector, { condition: p, setCondition: (condition) => {
                                                const newProducts = products.map((p, index) => {
                                                    if (index === i) {
                                                        return condition;
                                                    }
                                                    else {
                                                        return p;
                                                    }
                                                });
                                                setProducts(newProducts);
                                            } }))
                                    },
                                    props: {},
                                    sortOrder: 10
                                },
                                {
                                    component: {
                                        default: (React.createElement(PriceConditionSelector, { condition: p, setCondition: (condition) => {
                                                const newProducts = products.map((p, index) => {
                                                    if (index === i) {
                                                        return condition;
                                                    }
                                                    else {
                                                        return p;
                                                    }
                                                });
                                                setProducts(newProducts);
                                            } }))
                                    },
                                    props: {},
                                    sortOrder: 10
                                }
                            ], condition: {
                                key: p.key,
                                operator: p.operator,
                                value: p.value,
                                index: i
                            }, setCondition: (condition) => {
                                const newProducts = products.map((p, index) => {
                                    if (index === i) {
                                        return condition;
                                    }
                                    else {
                                        return p;
                                    }
                                });
                                setProducts(newProducts);
                            } })),
                    React.createElement("td", null,
                        React.createElement("div", { style: { width: '60px' } },
                            React.createElement(Field, { type: "text", name: `condition[required_products][${i}][qty]`, formId: "coupon-edit-form", value: p.qty, validationRules: ['notEmpty'], placeholder: "Enter the quantity" }))),
                    React.createElement("td", null,
                        React.createElement("a", { href: "#", className: "text-critical", onClick: (e) => removeProduct(e, i) },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5rem", height: "1.5rem", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M18 12H6" }))))));
            }))),
        React.createElement("div", { className: "mt-4 flex justify-start" },
            React.createElement("div", { className: "items-center flex" },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1.5rem", height: "1.5rem", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 2 },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M12 6v6m0 0v6m0-6h6m-6 0H6" }))),
            React.createElement("div", { className: "pl-4" },
                React.createElement("a", { href: "#", onClick: (e) => addProduct(e) },
                    React.createElement("span", null, "Add product"))))));
}
RequiredProducts.propTypes = {
    requiredProducts: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        operator: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.number)
        ]),
        qty: PropTypes.string
    }))
};
RequiredProducts.defaultProps = {
    requiredProducts: []
};
//# sourceMappingURL=RequireProducts.js.map