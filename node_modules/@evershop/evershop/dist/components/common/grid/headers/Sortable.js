import PropTypes from 'prop-types';
import React from 'react';
function Up() {
    return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 17 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1 8.5L8.5 1L16 8.5", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M16 14L8.5 21.5L1 14", stroke: "#e1e3e5", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
}
function Down() {
    return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 17 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1 8.5L8.5 1L16 8.5", stroke: "#e1e3e5", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M16 14L8.5 21.5L1 14", stroke: "black", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
}
function None() {
    return (React.createElement("svg", { width: "12", height: "12", viewBox: "0 0 17 23", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1 8.5L8.5 1L16 8.5", stroke: "#e1e3e5", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement("path", { d: "M16 14L8.5 21.5L1 14", stroke: "#e1e3e5", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })));
}
export default function SortableHeader({ title, name, currentFilters }) {
    const [currentDirection] = React.useState(() => {
        var _a;
        const currentOrderBy = currentFilters.find((filter) => filter.key === 'ob');
        if (!currentOrderBy || currentOrderBy.value !== name) {
            return null;
        }
        else {
            return (((_a = currentFilters.find((filter) => filter.key === 'od')) === null || _a === void 0 ? void 0 : _a.value) || 'asc');
        }
    });
    const onChange = () => {
        const url = new URL(window.location.href);
        url.searchParams.set('ob', name);
        // Get the current direction by checking the currentFilters
        const currentDirection = currentFilters.find((filter) => filter.key === 'od');
        if (!currentDirection || currentDirection.value === 'asc') {
            url.searchParams.set('od', 'desc');
        }
        else {
            url.searchParams.set('od', 'asc');
        }
        window.location.href = url;
    };
    return (React.createElement("th", { className: "column" },
        React.createElement("div", { className: "table-header flex justify-start gap-4 content-center" },
            React.createElement("div", { className: "font-medium uppercase text-xl" },
                React.createElement("span", null, title)),
            React.createElement("div", { className: "sort" },
                React.createElement("button", { type: "button", onClick: onChange }, currentDirection === 'asc' ? (React.createElement(Down, null)) : currentDirection === 'desc' ? (React.createElement(Up, null)) : (React.createElement(None, null)))))));
}
SortableHeader.propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currentFilters: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }))
};
SortableHeader.defaultProps = {
    currentFilters: []
};
//# sourceMappingURL=Sortable.js.map