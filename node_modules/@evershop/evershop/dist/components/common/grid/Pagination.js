import { Input } from '@components/common/form/fields/Input';
import ChevronDoubleLeftIcon from '@heroicons/react/outline/ChevronDoubleLeftIcon';
import ChevronDoubleRightIcon from '@heroicons/react/outline/ChevronDoubleRightIcon';
import PropTypes from 'prop-types';
import React from 'react';
import './Pagination.scss';
import { Select } from '@components/common/form/fields/Select';
export default function Pagination({ total, limit, page }) {
    const limitInput = React.useRef(null);
    React.useEffect(() => {
        limitInput.current.value = limit;
    }, []);
    const onKeyPress = (e) => {
        e.preventDefault();
        let pageNumber = parseInt(e.target.value, 10);
        if (page < 1)
            pageNumber = 1;
        if (page > Math.ceil(total / limit))
            pageNumber = Math.ceil(total / limit);
        const url = new URL(document.location);
        url.searchParams.set('page', pageNumber);
        window.location.href = url.href;
    };
    const onPrev = (e) => {
        e.preventDefault();
        const prev = parseInt(page, 10) - 1;
        if (page === 1)
            return;
        const url = new URL(document.location);
        url.searchParams.set('page', prev);
        window.location.href = url.href;
    };
    const onNext = (e) => {
        e.preventDefault();
        const next = parseInt(page, 10) + 1;
        if (page * limit >= total)
            return;
        const url = new URL(document.location);
        url.searchParams.set('page', next);
        window.location.href = url.href;
    };
    const onFirst = (e) => {
        e.preventDefault();
        if (page === 1)
            return;
        const url = new URL(document.location);
        url.searchParams.delete('page');
        window.location.href = url.href;
    };
    const onLast = (e) => {
        e.preventDefault();
        if (page === Math.ceil(total / limit))
            return;
        const url = new URL(document.location);
        url.searchParams.set('page', Math.ceil(total / limit));
        window.location.href = url.href;
    };
    const onKeyPressLimit = (e) => {
        if (e.which !== 13)
            return;
        e.preventDefault();
        const limitNumber = parseInt(e.target.value, 10);
        if (limit < 1)
            return;
        const url = new URL(document.location);
        url.searchParams.set('limit', limitNumber);
        window.location.href = url.href;
    };
    return (React.createElement("div", { className: "pagination flex px-8" },
        React.createElement("div", { className: "flex justify-between w-full space-x-4 mt-4 mb-4" },
            React.createElement("div", { className: "flex space-x-4" },
                React.createElement("div", { className: "self-center" },
                    React.createElement("span", null, "Show")),
                React.createElement("div", { className: "limit" },
                    React.createElement("div", { className: "", style: { width: '5rem' } },
                        React.createElement(Input, { onKeyPress: (e) => onKeyPressLimit(e), ref: limitInput }))),
                React.createElement("div", { className: "self-center" },
                    React.createElement("span", null, "per page"))),
            React.createElement("div", { className: "flex space-x-4" },
                page > 1 && (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "first self-center" },
                        React.createElement("a", { href: "#", onClick: (e) => onFirst(e) },
                            React.createElement(ChevronDoubleLeftIcon, { width: 20, height: 20 }))),
                    React.createElement("div", { className: "prev self-center" },
                        React.createElement("a", { href: "#", onClick: (e) => onPrev(e) },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" })))))),
                React.createElement("div", { className: "current", style: { width: '5rem' } },
                    React.createElement(Select, { placeholder: page.toString(), onChange: (e) => {
                            onKeyPress(e);
                        }, 
                        // List all possible page
                        options: Array.from({ length: Math.ceil(total / limit) }, (_, i) => i + 1).map((item) => ({
                            value: item,
                            text: item.toString()
                        })) })),
                page * limit < total && (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "next self-center" },
                        React.createElement("a", { href: "#", onClick: (e) => onNext(e) },
                            React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                                React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" })))),
                    React.createElement("div", { className: "last self-center" },
                        React.createElement("a", { href: "#", onClick: (e) => onLast(e) },
                            React.createElement(ChevronDoubleRightIcon, { width: 20, height: 20 }))))),
                React.createElement("div", { className: "self-center" },
                    React.createElement("span", null,
                        total,
                        " records"))))));
}
Pagination.propTypes = {
    limit: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired
};
//# sourceMappingURL=Pagination.js.map