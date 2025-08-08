import { Input } from '@components/common/form/fields/Input';
import PropTypes from 'prop-types';
import React from 'react';
export default function FromToColumnHeader({ title, id, currentFilters = [] }) {
    const filterFrom = React.useRef(null);
    const filterTo = React.useRef(null);
    const onKeyPress = (e) => {
        const url = new URL(document.location);
        if (e.key === 'Enter') {
            if (filterTo.current.value === '' && filterFrom.current.value === '')
                url.searchParams.delete(id);
            else
                url.searchParams.set(id, `${filterFrom.current.value}-${filterTo.current.value}`);
            window.location.href = url.href;
        }
    };
    React.useEffect(() => {
        const filter = currentFilters.find((f) => f.key === id) || { value: '-' };
        filterFrom.current.value = filter.value.split('-')[0] || '';
        filterTo.current.value = filter.value.split('-')[1] || '';
    }, []);
    return (React.createElement("th", null,
        React.createElement("div", { className: "table-header price-header" },
            React.createElement("div", { className: "title", style: { marginBottom: '1rem' } },
                React.createElement("span", null, title)),
            React.createElement("div", { className: "flex space-x-4" },
                React.createElement("div", { style: { width: '6rem' } },
                    React.createElement(Input, { type: "text", ref: filterFrom, onKeyPress: (e) => onKeyPress(e), placeholder: "From", className: "form-control" })),
                React.createElement("div", { style: { width: '6rem' } },
                    React.createElement(Input, { type: "text", ref: filterTo, onKeyPress: (e) => onKeyPress(e), placeholder: "To", className: "form-control" }))))));
}
FromToColumnHeader.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentFilters: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string,
        value: PropTypes.string
    }))
};
FromToColumnHeader.defaultProps = {
    currentFilters: []
};
//# sourceMappingURL=FromTo.js.map