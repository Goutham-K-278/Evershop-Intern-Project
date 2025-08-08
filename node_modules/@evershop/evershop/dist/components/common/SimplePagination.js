import ChevronDoubleLeftIcon from '@heroicons/react/outline/ChevronLeftIcon';
import ChevronDoubleRightIcon from '@heroicons/react/outline/ChevronRightIcon';
import PropTypes from 'prop-types';
import React from 'react';
export function SimplePageination({ total, count, page, hasNext, setPage }) {
    return (React.createElement("div", { className: "simple__pagination flex gap-4 items-center" },
        React.createElement("div", null,
            React.createElement("span", null,
                count,
                " of ",
                total)),
        React.createElement("div", { className: "flex gap-4" },
            page > 1 && (React.createElement("a", { className: "hover:text-interactive border rounded p-[5px] border-divider", href: "#", onClick: (e) => {
                    e.preventDefault();
                    setPage(page - 1);
                } },
                React.createElement(ChevronDoubleLeftIcon, { width: 15, height: 15 }))),
            page === 1 && (React.createElement("span", { className: "border rounded p-[5px] border-divider text-divider" },
                React.createElement(ChevronDoubleLeftIcon, { width: 15, height: 15 }))),
            hasNext && (React.createElement("a", { className: "hover:text-interactive border rounded p-[5px] border-divider", href: "#", onClick: (e) => {
                    e.preventDefault();
                    setPage(page + 1);
                } },
                React.createElement(ChevronDoubleRightIcon, { width: 15, height: 15 }))),
            !hasNext && (React.createElement("span", { className: "border rounded p-[5px] border-divider text-divider" },
                React.createElement(ChevronDoubleRightIcon, { width: 15, height: 15 }))))));
}
SimplePageination.propTypes = {
    total: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    hasNext: PropTypes.bool.isRequired,
    setPage: PropTypes.func.isRequired
};
//# sourceMappingURL=SimplePagination.js.map