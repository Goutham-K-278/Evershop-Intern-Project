import { Card } from '@components/admin/cms/Card';
import Button from '@components/common/form/Button';
import { SimplePageination } from '@components/common/SimplePagination';
import Spinner from '@components/common/Spinner';
import CheckIcon from '@heroicons/react/outline/CheckIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { toast } from 'react-toastify';
import { useQuery } from 'urql';
const SearchQuery = `
  query Query ($filters: [FilterInput!]) {
    products(filters: $filters) {
      items {
        productId
        uuid
        sku
        name
        price {
          regular {
            text
          }
        }
        image {
          url: thumb
        }
      }
      total
    }
  }
`;
function ProductSkuSelector({ onSelect, onUnSelect, selectedChecker, closeModal }) {
    var _a, _b;
    const limit = 10;
    const [inputValue, setInputValue] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [page, setPage] = React.useState(1);
    const [result, reexecuteQuery] = useQuery({
        query: SearchQuery,
        variables: {
            filters: inputValue
                ? [
                    { key: 'keyword', operation: 'eq', value: inputValue },
                    { key: 'page', operation: 'eq', value: page.toString() },
                    { key: 'limit', operation: 'eq', value: limit.toString() }
                ]
                : [
                    { key: 'limit', operation: 'eq', value: limit.toString() },
                    { key: 'page', operation: 'eq', value: page.toString() }
                ]
        },
        pause: true
    });
    const selectProduct = async (sku, uuid, productId) => {
        try {
            await onSelect(sku, uuid, productId);
        }
        catch (e) {
            toast.error(e.message);
        }
    };
    const unSelectProduct = async (sku, uuid, productId) => {
        try {
            await onUnSelect(sku, uuid, productId);
        }
        catch (e) {
            toast.error(e.message);
        }
    };
    React.useEffect(() => {
        reexecuteQuery({ requestPolicy: 'network-only' });
    }, []);
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            if (inputValue !== null) {
                reexecuteQuery({ requestPolicy: 'network-only' });
            }
        }, 1500);
        return () => clearTimeout(timer);
    }, [inputValue]);
    React.useEffect(() => {
        reexecuteQuery({ requestPolicy: 'network-only' });
    }, [page]);
    const { data, fetching, error } = result;
    if (error) {
        return (React.createElement("p", null,
            "There was an error fetching products.",
            error.message));
    }
    return (React.createElement(Card, { title: "Select Products" },
        React.createElement("div", { className: "modal-content" },
            React.createElement(Card.Session, null,
                React.createElement("div", null,
                    React.createElement("div", { className: "border rounded border-divider mb-8" },
                        React.createElement("input", { type: "text", value: inputValue || '', placeholder: "Search products", onChange: (e) => {
                                setInputValue(e.target.value);
                                setLoading(true);
                            } })),
                    (fetching || loading) && (React.createElement("div", { className: "p-3 border border-divider rounded flex justify-center items-center" },
                        React.createElement(Spinner, { width: 25, height: 25 }))),
                    !fetching && data && !loading && (React.createElement("div", { className: "divide-y" },
                        data.products.items.length === 0 && (React.createElement("div", { className: "p-3 border border-divider rounded flex justify-center items-center" }, inputValue ? (React.createElement("p", null,
                            "No products found for query \"",
                            inputValue,
                            "\u201D")) : (React.createElement("p", null, "You have no products to display")))),
                        data.products.items.map((product) => {
                            var _a, _b, _c;
                            return (React.createElement("div", { key: product.uuid, className: "grid grid-cols-8 gap-8 py-4 border-divider items-center" },
                                React.createElement("div", { className: "col-span-1" },
                                    React.createElement("div", { className: "text-border border border-divider p-3 rounded flex justify-center" },
                                        ((_a = product.image) === null || _a === void 0 ? void 0 : _a.url) && (React.createElement("img", { src: (_b = product.image) === null || _b === void 0 ? void 0 : _b.url, alt: product.name })),
                                        !((_c = product.image) === null || _c === void 0 ? void 0 : _c.url) && (React.createElement("svg", { className: "self-center", xmlns: "http://www.w3.org/2000/svg", width: "2rem", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                            React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" }))))),
                                React.createElement("div", { className: "col-span-5" },
                                    React.createElement("h3", null, product.name),
                                    React.createElement("p", null, product.sku)),
                                React.createElement("div", { className: "col-span-2 text-right" },
                                    !selectedChecker(product) && (React.createElement("button", { type: "button", className: "button secondary", onClick: async (e) => {
                                            e.preventDefault();
                                            await selectProduct(product.sku, product.uuid, product.productId);
                                        } }, "Select")),
                                    selectedChecker(product) && (React.createElement("a", { className: "button primary", href: "#", onClick: (e) => {
                                            e.preventDefault();
                                            unSelectProduct(product.sku, product.uuid, product.productId);
                                        } },
                                        React.createElement(CheckIcon, { width: 20, height: 20 }))))));
                        })))))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "flex justify-between gap-8" },
                React.createElement(SimplePageination, { total: (data === null || data === void 0 ? void 0 : data.products.total) || 0, count: ((_b = (_a = data === null || data === void 0 ? void 0 : data.products) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) || 0, page: page, hasNext: limit * page < (data === null || data === void 0 ? void 0 : data.products.total), setPage: setPage }),
                React.createElement(Button, { title: "Close", variant: "secondary", onAction: closeModal })))));
}
ProductSkuSelector.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onUnSelect: PropTypes.func.isRequired,
    selectedChecker: PropTypes.func.isRequired,
    closeModal: PropTypes.func.isRequired
};
export default ProductSkuSelector;
//# sourceMappingURL=ProductSkuSelector.js.map