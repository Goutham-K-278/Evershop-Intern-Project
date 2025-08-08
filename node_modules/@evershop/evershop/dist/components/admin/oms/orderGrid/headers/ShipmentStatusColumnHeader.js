import { Select } from '@components/common/form/fields/Select';
import PropTypes from 'prop-types';
import React from 'react';
export default function ShipmentStatusColumnHeader({ title, id, shipmentStatusList = [], currentFilters = [] }) {
    const [current, setCurrent] = React.useState('');
    const onChange = (e) => {
        const url = new URL(document.location);
        if (e.target.value === 'all') {
            url.searchParams.delete(id);
        }
        else {
            url.searchParams.set(id, e.target.value);
        }
        window.location.href = url.href;
    };
    React.useEffect(() => {
        const filter = currentFilters.find((fillter) => fillter.key === id) || {
            value: ''
        };
        setCurrent(filter.value);
    }, []);
    return (React.createElement("th", { className: "column" },
        React.createElement("div", { className: "table-header status-header" },
            React.createElement("div", { className: "title", style: { marginBottom: '1rem' } },
                React.createElement("span", null, title)),
            React.createElement("div", { className: "filter" },
                React.createElement(Select, { onChange: (e) => onChange(e), value: current, options: [{ value: 'all', text: 'All' }].concat(shipmentStatusList) })))));
}
ShipmentStatusColumnHeader.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shipmentStatusList: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired
    })).isRequired,
    currentFilters: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    })).isRequired
};
//# sourceMappingURL=ShipmentStatusColumnHeader.js.map