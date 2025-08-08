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
    categories(filters: $filters) {
      items {
        categoryId
        uuid
        name
        path {
          name
        }
      }
      total
    }
  }
`;
function CategorySelector({ onSelect, onUnSelect, selectedIDs, closeModal }) {
    var _a, _b;
    const limit = 10;
    const [inputValue, setInputValue] = React.useState(null);
    const [page, setPage] = React.useState(1);
    const [result, reexecuteQuery] = useQuery({
        query: SearchQuery,
        variables: {
            filters: inputValue
                ? [
                    { key: 'name', operation: 'like', value: inputValue },
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
        return (React.createElement("p", { className: "text-critical" },
            "There was an error fetching categories.",
            error.message));
    }
    return (React.createElement(Card, { title: "Select categories" },
        React.createElement("div", { className: "modal-content" },
            React.createElement(Card.Session, null,
                React.createElement("div", null,
                    React.createElement("div", { className: "border rounded border-divider mb-8" },
                        React.createElement("input", { type: "text", value: inputValue || '', placeholder: "Search categories", onChange: (e) => setInputValue(e.target.value) })),
                    fetching && (React.createElement("div", { className: "p-3 border border-divider rounded flex justify-center items-center" },
                        React.createElement(Spinner, { width: 25, height: 25 }))),
                    !fetching && data && (React.createElement("div", { className: "divide-y" },
                        data.categories.items.length === 0 && (React.createElement("div", { className: "p-3 border border-divider rounded flex justify-center items-center" }, inputValue ? (React.createElement("p", null,
                            "No categories found for query \"",
                            inputValue,
                            "\u201D")) : (React.createElement("p", null, "You have no categories to display")))),
                        data.categories.items.map((cat) => (React.createElement("div", { key: cat.uuid, className: "grid grid-cols-8 gap-8 py-4 border-divider items-center" },
                            React.createElement("div", { className: "col-span-5" },
                                React.createElement("h3", null, cat.path.map((item, index) => (React.createElement("span", { key: item.name, className: "text-gray-500" },
                                    item.name,
                                    index < cat.path.length - 1 && ' > '))))),
                            React.createElement("div", { className: "col-span-3 text-right" },
                                !selectedIDs.includes(cat.categoryId) && (React.createElement("button", { type: "button", className: "button secondary", onClick: async (e) => {
                                        e.preventDefault();
                                        onSelect(cat.categoryId);
                                    } }, "Select")),
                                selectedIDs.includes(cat.categoryId) && (React.createElement("a", { className: "button primary", href: "#", onClick: (e) => {
                                        e.preventDefault();
                                        onUnSelect(cat.categoryId);
                                    } },
                                    React.createElement(CheckIcon, { width: 20, height: 20 })))))))))))),
        React.createElement(Card.Session, null,
            React.createElement("div", { className: "flex justify-between gap-8" },
                React.createElement(SimplePageination, { total: (data === null || data === void 0 ? void 0 : data.categories.total) || 0, count: ((_b = (_a = data === null || data === void 0 ? void 0 : data.categories) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) || 0, page: page, hasNext: limit * page < (data === null || data === void 0 ? void 0 : data.categories.total), setPage: setPage }),
                React.createElement(Button, { title: "Close", variant: "secondary", onAction: closeModal })))));
}
CategorySelector.propTypes = {
    onSelect: PropTypes.func.isRequired,
    onUnSelect: PropTypes.func.isRequired,
    selectedIDs: PropTypes.arrayOf(PropTypes.number),
    closeModal: PropTypes.func.isRequired
};
CategorySelector.defaultProps = {
    selectedIDs: []
};
export default CategorySelector;
//# sourceMappingURL=CategorySelector.js.map