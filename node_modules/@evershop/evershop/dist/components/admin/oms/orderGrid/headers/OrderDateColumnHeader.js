import { useAppState } from '@components/common/context/app';
import { Date } from '@components/common/form/fields/Date';
import { DateTime } from 'luxon';
import PropTypes from 'prop-types';
import React from 'react';
import { get } from '../../../../../lib/util/get.js';
export default function FromToColumnHeader({ title, id }) {
    const filterFrom = React.useRef(null);
    const filterTo = React.useRef(null);
    const context = useAppState();
    const onChange = () => {
        const url = new URL(document.location);
        if (filterTo.current.value === '' && filterFrom.current.value === '') {
            url.searchParams.delete(id);
        }
        else {
            const form = DateTime.fromISO(filterFrom.current.value)
                .toFormat('D')
                .toString();
            const to = DateTime.fromISO(filterTo.current.value)
                .toFormat('D')
                .toString();
            url.searchParams.set(id, `${form}-${to}`);
        }
        window.location.href = url.href;
    };
    React.useEffect(() => {
        const form = DateTime.fromISO(get(context, `grid.currentFilter.${id}.from`, '')).isValid
            ? DateTime.fromISO(get(context, `grid.currentFilter.${id}.from`, ''))
                .toFormat('yyyy-MM-dd')
                .toString()
            : '';
        const to = DateTime.fromISO(get(context, `grid.currentFilter.${id}.to`, ''))
            .isValid
            ? DateTime.fromISO(get(context, `grid.currentFilter.${id}.to`, ''))
                .toFormat('yyyy-MM-dd')
                .toString()
            : '';
        filterFrom.current.value = form;
        filterTo.current.value = to;
    }, []);
    return (React.createElement("th", null,
        React.createElement("div", { className: "table-header price-header" },
            React.createElement("div", { className: "title", style: { marginBottom: '1rem' } },
                React.createElement("span", null, title)),
            React.createElement("div", { className: "flex space-x-4" },
                React.createElement("div", { style: { width: '10rem' } },
                    React.createElement(Date, { ref: filterFrom, onChange: (e) => onChange(e), placeholder: "From", className: "form-control", name: "dateFilterFrom" })),
                React.createElement("div", { style: { width: '10rem' } },
                    React.createElement(Date, { ref: filterTo, onChange: (e) => onChange(e), placeholder: "To", className: "form-control", name: "dateFilterTo" }))))));
}
FromToColumnHeader.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
//# sourceMappingURL=OrderDateColumnHeader.js.map