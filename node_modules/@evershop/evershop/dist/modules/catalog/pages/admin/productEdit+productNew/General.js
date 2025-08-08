import { Card } from '@components/admin/cms/Card';
import CategorySelector from '@components/admin/promotion/couponEdit/CategorySelector';
import Area from '@components/common/Area';
import { Field } from '@components/common/form/Field';
import Editor from '@components/common/form/fields/Editor';
import { useModal } from '@components/common/modal/useModal';
import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'urql';
function SKUPriceWeight({ sku, price, weight, setting }) {
    return (React.createElement("div", { className: "grid grid-cols-3 gap-4 mt-6" },
        React.createElement("div", null,
            React.createElement(Field, { id: "sku", name: "sku", value: sku, placeholder: "SKU", label: "SKU", type: "text", validationRules: ['notEmpty'] })),
        React.createElement("div", null,
            React.createElement(Field, { id: "price", name: "price", value: price === null || price === void 0 ? void 0 : price.value, placeholder: "Price", label: "Price", type: "text", validationRules: ['notEmpty'], suffix: setting.storeCurrency })),
        React.createElement("div", null,
            React.createElement(Field, { id: "weight", name: "weight", value: weight === null || weight === void 0 ? void 0 : weight.value, placeholder: "Weight", label: "Weight", type: "text", validationRules: ['notEmpty'], suffix: setting.weightUnit }))));
}
SKUPriceWeight.propTypes = {
    price: PropTypes.shape({
        value: PropTypes.number
    }),
    sku: PropTypes.string,
    weight: PropTypes.shape({
        value: PropTypes.number
    }),
    setting: PropTypes.shape({
        storeCurrency: PropTypes.string,
        weightUnit: PropTypes.string
    }).isRequired
};
SKUPriceWeight.defaultProps = {
    price: undefined,
    sku: undefined,
    weight: undefined
};
const CategoryQuery = `
  query Query ($id: Int!) {
    category(id: $id) {
      name
      path {
        name
      }
    }
  }
`;
function ProductCategory({ categoryId, onChange, onUnassign }) {
    const [result] = useQuery({
        query: CategoryQuery,
        variables: {
            id: parseInt(categoryId, 10)
        }
    });
    const { data, fetching, error } = result;
    if (error) {
        return (React.createElement("p", { className: "text-critical" },
            "There was an error fetching categories.",
            error.message));
    }
    if (fetching) {
        return React.createElement("span", null, "Loading...");
    }
    return (React.createElement("div", null,
        data.category.path.map((item, index) => (React.createElement("span", { key: item.name, className: "text-gray-500" },
            item.name,
            index < data.category.path.length - 1 && ' > '))),
        React.createElement("span", { className: "text-interactive pl-8" },
            React.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    onChange();
                } }, "Change"),
            React.createElement("a", { href: "#", onClick: (e) => {
                    e.preventDefault();
                    onUnassign();
                }, className: "text-critical ml-8" }, "Unassign"))));
}
ProductCategory.propTypes = {
    categoryId: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
    onUnassign: PropTypes.func.isRequired
};
function CategorySelect({ product }) {
    var _a;
    const [category, setCategory] = React.useState(product ? (_a = product.category) === null || _a === void 0 ? void 0 : _a.categoryId : null);
    const modal = useModal();
    const closeModal = () => {
        modal.closeModal();
    };
    const onSelect = (categoryID) => {
        setCategory(categoryID);
        closeModal();
    };
    return (React.createElement("div", { className: "mt-6 relative" },
        React.createElement("div", { className: "mb-4" }, "Category"),
        category && (React.createElement("div", { className: "border rounded border-[#c9cccf] mb-4 p-4" },
            React.createElement(ProductCategory, { categoryId: category, onChange: () => modal.openModal(), onUnassign: () => setCategory(null) }))),
        !category && (React.createElement("a", { href: "#", onClick: (e) => {
                e.preventDefault();
                modal.openModal();
            }, className: "text-interactive" }, "Select category")),
        modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
            React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                React.createElement("div", { className: "modal" },
                    React.createElement(CategorySelector, { onSelect: onSelect, onUnSelect: () => { }, selectedIDs: category ? [category] : [], closeModal: closeModal }))))),
        category && React.createElement("input", { type: "hidden", name: "category_id", value: category }),
        !category && React.createElement("input", { type: "hidden", name: "category_id", value: "" })));
}
CategorySelect.propTypes = {
    product: PropTypes.shape({
        category: PropTypes.shape({
            categoryId: PropTypes.number.isRequired,
            name: PropTypes.string,
            path: PropTypes.arrayOf(PropTypes.shape({
                name: PropTypes.string.isRequired
            })).isRequired
        })
    })
};
CategorySelect.defaultProps = {
    product: {
        category: {}
    }
};
export default function General({ product, browserApi, deleteApi, uploadApi, folderCreateApi, setting, productTaxClasses: { items: taxClasses } }) {
    return (React.createElement(Card, { title: "General" },
        React.createElement(Card.Session, null,
            React.createElement(Area, { id: "productEditGeneral", coreComponents: [
                    {
                        component: { default: Field },
                        props: {
                            id: 'name',
                            name: 'name',
                            label: 'Name',
                            value: product === null || product === void 0 ? void 0 : product.name,
                            validationRules: ['notEmpty'],
                            type: 'text',
                            placeholder: 'Name'
                        },
                        sortOrder: 10,
                        id: 'name'
                    },
                    {
                        component: { default: Field },
                        props: {
                            id: 'product_id',
                            name: 'product_id',
                            value: product === null || product === void 0 ? void 0 : product.productId,
                            type: 'hidden'
                        },
                        sortOrder: 10,
                        id: 'product_id'
                    },
                    {
                        component: { default: SKUPriceWeight },
                        props: {
                            sku: product === null || product === void 0 ? void 0 : product.sku,
                            price: product === null || product === void 0 ? void 0 : product.price.regular,
                            weight: product === null || product === void 0 ? void 0 : product.weight,
                            setting
                        },
                        sortOrder: 20,
                        id: 'SKUPriceWeight'
                    },
                    {
                        component: { default: CategorySelect },
                        props: {
                            product
                        },
                        sortOrder: 22,
                        id: 'category'
                    },
                    {
                        component: { default: Field },
                        props: {
                            id: 'tax_class',
                            name: 'tax_class',
                            value: (product === null || product === void 0 ? void 0 : product.taxClass) || '',
                            type: 'select',
                            label: 'Tax class',
                            options: [...taxClasses],
                            placeholder: 'None',
                            disableDefaultOption: false
                        },
                        sortOrder: 25,
                        id: 'tax_class'
                    },
                    {
                        component: { default: Editor },
                        props: {
                            id: 'description',
                            name: 'description',
                            label: 'Description',
                            value: product === null || product === void 0 ? void 0 : product.description,
                            browserApi,
                            deleteApi,
                            uploadApi,
                            folderCreateApi
                        },
                        sortOrder: 30,
                        id: 'description'
                    }
                ] }))));
}
General.propTypes = {
    browserApi: PropTypes.string.isRequired,
    deleteApi: PropTypes.string.isRequired,
    folderCreateApi: PropTypes.string.isRequired,
    uploadApi: PropTypes.string.isRequired,
    product: PropTypes.shape({
        description: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            size: PropTypes.number.isRequired,
            columns: PropTypes.arrayOf(PropTypes.shape({
                id: PropTypes.string.isRequired,
                size: PropTypes.number.isRequired,
                data: PropTypes.object.isRequired
            }))
        })),
        name: PropTypes.string,
        price: PropTypes.shape({
            regular: PropTypes.shape({
                currency: PropTypes.string,
                value: PropTypes.number
            })
        }),
        productId: PropTypes.number,
        taxClass: PropTypes.number,
        sku: PropTypes.string,
        weight: PropTypes.shape({
            unit: PropTypes.string,
            value: PropTypes.number
        })
    }),
    setting: PropTypes.shape({
        storeCurrency: PropTypes.string,
        weightUnit: PropTypes.string
    }).isRequired,
    productTaxClasses: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.number,
            text: PropTypes.string
        }))
    })
};
General.defaultProps = {
    product: undefined,
    productTaxClasses: {
        items: []
    }
};
export const layout = {
    areaId: 'leftSide',
    sortOrder: 10
};
export const query = `
  query Query {
    product(id: getContextValue("productId", null)) {
      productId
      name
      description
      sku
      taxClass
      price {
        regular {
          value
          currency
        }
      }
      weight {
        value
        unit
      }
      category {
        categoryId
        path {
          name
        }
      }
    }
    setting {
      weightUnit
      storeCurrency
    }
    browserApi: url(routeId: "fileBrowser", params: [{key: "0", value: ""}])
    deleteApi: url(routeId: "fileDelete", params: [{key: "0", value: ""}])
    uploadApi: url(routeId: "imageUpload", params: [{key: "0", value: ""}])
    folderCreateApi: url(routeId: "folderCreate")
    productTaxClasses: taxClasses {
      items {
        value: taxClassId
        text: name
      }
    }
  }
`;
//# sourceMappingURL=General.js.map