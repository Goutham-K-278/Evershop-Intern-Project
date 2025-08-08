import { Card } from '@components/admin/cms/Card';
import Button from '@components/common/form/Button';
import { SimplePageination } from '@components/common/SimplePagination';
import Spinner from '@components/common/Spinner';
import CheckIcon from '@heroicons/react/outline/CheckIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'urql';
const SearchQuery = `
  query Query ($filters: [FilterInput!]) {
    collections(filters: $filters) {
      items {
        collectionId
        uuid
        name
      }
      total
    }
  }
`;
function CollectionSelector({ onSelect, onUnSelect, selectedIDs, closeModal }) {
    var _a, _b;
    const limit = 10;
    const [inputValue, setInputValue] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const [result, reexecuteQuery] = useQuery({
        query: SearchQuery,
        variables: {
            filters: inputValue
                ? [
                    { key: 'name', operation: 'eq', value: inputValue },
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
    React.useEffect(() => {
        reexecuteQuery({ requestPolicy: 'network-only' });
    }, []);
    React.useEffect(() => {
        const timer = setTimeout(() => {
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
            "There was an error fetching collections.",
            error.message));
    }
    return (React.createElement(Card, { title: "Select Products" },
        React.createElement("div", { className: "modal-content" },
            React.createElement(Card.Session, null,
                React.createElement("div", null,
                    React.createElement("div", { className: "border rounded border-divider mb-8" },
                        React.createElement("input", { type: "text", value: inputValue || '', placeholder: "Search collections", onChange: (e) => setInputValue(e.target.value) })),
                    fetching && (React.createElement("div", { className: "p-3 border border-divider rounded flex justify-center items-center" },
                        React.createElement(Spinner, { width: 25, height: 25 }))),
                    !fetching && data && (React.createElement("div", { className: "divide-y" },
                        data.collections.items.length === 0 && (React.createElement("div", { className: "p-3 border border-divider rounded flex justify-center items-center" }, inputValue ? (React.createElement("p", null,
                            "No collections found for query \"",
                            inputValue,
                            "\u201D")) : (React.createElement("p", null, "You have no collections to display")))),
                        data.collections.items.map((collection) => (React.createElement("div", { key: collection.uuid, className: "grid grid-cols-8 gap-8 py-4 border-divider items-center" },
                            React.createElement("div", { className: "col-span-5" },
                                React.createElement("h3", null, collection.name)),
                            React.createElement("div", { className: "col-span-2 text-right" },
                                !selectedIDs.includes(collection.collectionId) && (React.createElement("button", { type: "button", className: "button secondary", onClick: (e) => {
                                        e.preventDefault();
                                        onSelect(collection.collectionId);
                                    } }, "Select")),
                                selectedIDs.includes(collection.collectionId) && (React.createElement("a", { className: "button primary", href: "#", onClick: (e) => {
                                        e.preventDefault();
                                        onUnSelect(collection.collectionId);
                                    } },
                                    React.createElement(CheckIcon, { width: 20, height: 20 })))))))))))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "flex justify-between gap-8" },
                React.createElement(SimplePageination, { total: (data === null || data === void 0 ? void 0 : data.collections.total) || 0, count: ((_b = (_a = data === null || data === void 0 ? void 0 : data.collections) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) || 0, page: page, hasNext: limit * page < (data === null || data === void 0 ? void 0 : data.collections.total), setPage: setPage }),
                React.createElement(Button, { title: "Close", variant: "secondary", onAction: closeModal })))));
}
CollectionSelector.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onUnSelect: PropTypes.func.isRequired,
    selectedIDs: PropTypes.arrayOf(PropTypes.number),
    closeModal: PropTypes.func.isRequired
};
CollectionSelector.defaultProps = {
    selectedIDs: []
};
export default CollectionSelector;
//# sourceMappingURL=CollectionSelector.js.map