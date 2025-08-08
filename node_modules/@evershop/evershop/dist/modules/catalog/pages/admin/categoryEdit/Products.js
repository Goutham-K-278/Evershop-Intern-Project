import { Card } from '@components/admin/cms/Card';
import { useModal } from '@components/common/modal/useModal';
import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'urql';
import './Products.scss';
import AddProducts from '@components/admin/catalog/collection/collectionEdit/AddProducts';
import Spinner from '@components/common/Spinner';
const ProductsQuery = `
  query Query ($id: Int, $filters: [FilterInput!]) {
    category (id: $id) {
      products (filters: $filters) {
        items {
          productId
          uuid
          name
          sku
          price {
            regular {
              text
            }
          }
          image {
            url: thumb
          }
          editUrl
          removeFromCategoryUrl
        }
        total
      }
    }
  }
`;
export default function Products({ category: { categoryId, addProductApi } }) {
    const [keyword, setKeyword] = React.useState('');
    const [page, setPage] = React.useState(1);
    const [removing, setRemoving] = React.useState([]);
    const modal = useModal();
    // Run query again when page changes
    const [result, reexecuteQuery] = useQuery({
        query: ProductsQuery,
        variables: {
            id: parseInt(categoryId, 10),
            filters: !keyword
                ? [
                    { key: 'page', operation: 'eq', value: page.toString() },
                    { key: 'limit', operation: 'eq', value: '10' }
                ]
                : [
                    { key: 'page', operation: 'eq', value: page.toString() },
                    { key: 'limit', operation: 'eq', value: '10' },
                    { key: 'keyword', operation: 'eq', value: keyword }
                ]
        },
        pause: true
    });
    React.useEffect(() => {
        reexecuteQuery({ requestPolicy: 'network-only' });
    }, []);
    const closeModal = () => {
        // Reexecute query to update products
        reexecuteQuery({ requestPolicy: 'network-only' });
        modal.closeModal();
    };
    const removeProduct = async (api, uuid) => {
        setRemoving([...removing, uuid]);
        await fetch(api, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin'
        });
        setPage(1);
        reexecuteQuery({ requestPolicy: 'network-only' });
    };
    React.useEffect(() => {
        const timer = setTimeout(() => {
            reexecuteQuery({ requestPolicy: 'network-only' });
        }, 1500);
        return () => clearTimeout(timer);
    }, [keyword]);
    React.useEffect(() => {
        if (result.fetching) {
            return;
        }
        reexecuteQuery({ requestPolicy: 'network-only' });
    }, [page]);
    const { data, fetching, error } = result;
    if (error) {
        return (React.createElement("p", null,
            "Oh no...",
            error.message));
    }
    if (data || fetching) {
        return (React.createElement(Card, { title: "Products", actions: [
                {
                    name: 'Add products',
                    onAction: () => {
                        modal.openModal();
                    }
                }
            ] },
            modal.state.showing && (React.createElement("div", { className: modal.className, onAnimationEnd: modal.onAnimationEnd },
                React.createElement("div", { className: "modal-wrapper flex self-center justify-center items-center", tabIndex: -1, role: "dialog" },
                    React.createElement("div", { className: "modal" },
                        React.createElement(AddProducts, { addProductApi: addProductApi, closeModal: closeModal, addedProductIDs: data.category.products.items.map((p) => p.productId) }))))),
            React.createElement(Card.Session, null,
                React.createElement("div", null,
                    React.createElement("div", { className: "border rounded border-divider mb-8" },
                        React.createElement("input", { type: "text", value: keyword, placeholder: "Search products", onChange: (e) => setKeyword(e.target.value) })),
                    data && (React.createElement(React.Fragment, null,
                        data.category.products.items.length === 0 && (React.createElement("div", null, "No product to display.")),
                        React.createElement("div", { className: "flex justify-between" },
                            React.createElement("div", null,
                                React.createElement("i", null,
                                    data.category.products.total,
                                    " items")),
                            React.createElement("div", null, data.category.products.total > 10 && (React.createElement("div", { className: "flex justify-between gap-4" },
                                page > 1 && (React.createElement("a", { className: "text-interactive", href: "#", onClick: (e) => {
                                        e.preventDefault();
                                        setPage(page - 1);
                                    } }, "Previous")),
                                page < data.category.products.total / 10 && (React.createElement("a", { className: "text-interactive", href: "#", onClick: (e) => {
                                        e.preventDefault();
                                        setPage(page + 1);
                                    } }, "Next")))))),
                        React.createElement("div", { className: "divide-y" }, data.category.products.items.map((p) => {
                            var _a, _b, _c;
                            return (React.createElement("div", { key: p.uuid, className: "grid grid-cols-8 gap-8 py-4 border-divider items-center" },
                                React.createElement("div", { className: "grid-thumbnail text-border border border-divider p-3 rounded flex justify-center col-span-1" },
                                    ((_a = p.image) === null || _a === void 0 ? void 0 : _a.url) && (React.createElement("img", { className: "self-center", src: (_b = p.image) === null || _b === void 0 ? void 0 : _b.url, alt: "" })),
                                    !((_c = p.image) === null || _c === void 0 ? void 0 : _c.url) && (React.createElement("svg", { className: "self-center", xmlns: "http://www.w3.org/2000/svg", width: "2rem", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" })))),
                                React.createElement("div", { className: "col-span-5" },
                                    React.createElement("a", { href: p.editUrl || '', className: "font-semibold hover:underline" }, p.name)),
                                React.createElement("div", { className: "col-span-2 text-right" },
                                    React.createElement("a", { href: "#", onClick: async (e) => {
                                            e.preventDefault();
                                            await removeProduct(p.removeFromCategoryUrl, p.uuid);
                                        }, className: "text-critical hover:first-letter:" }, "Remove"))));
                        })))),
                    fetching && (React.createElement("div", { className: "p-3 border border-divider rounded flex justify-center items-center" },
                        React.createElement(Spinner, { width: 25, height: 25 })))))));
    }
    else {
        return null;
    }
}
Products.propTypes = {
    category: PropTypes.shape({
        categoryId: PropTypes.number,
        addProductApi: PropTypes.string
    }).isRequired
};
export const layout = {
    areaId: 'leftSide',
    sortOrder: 15
};
export const query = `
  query Query {
    category(id: getContextValue("categoryId", null)) {
      categoryId
      addProductApi: addProductUrl
    }
  }
`;
//# sourceMappingURL=Products.js.map