import { Select } from '@components/common/form/fields/Select';
import PropTypes from 'prop-types';
import React from 'react';
export default function StatusColumnHeader({ title, id, currentFilter = {} }) {
    const [current, setCurrent] = React.useState('');
    const onChange = (e) => {
        const url = new URL(document.location);
        if (e.target.value === 'all')
            url.searchParams.delete(id);
        else
            url.searchParams.set(id, e.target.value);
        window.location.href = url.href;
    };
    React.useEffect(() => {
        setCurrent(currentFilter.value || 'all');
    }, []);
    return (React.createElement("th", { className: "column" },
        React.createElement("div", { className: "table-header status-header" },
            React.createElement("div", { className: "title", style: { marginBottom: '1rem' } },
                React.createElement("span", null, title)),
            React.createElement("div", { className: "filter" },
                React.createElement(Select, { onChange: (e) => onChange(e), className: "form-control", value: current, options: [
                        { value: 'all', text: 'All' },
                        { value: 1, text: 'Enabled' },
                        { value: 0, text: 'Disabled' }
                    ] })))));
}
StatusColumnHeader.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    currentFilter: PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
};
StatusColumnHeader.defaultProps = {
    currentFilter: {}
};
//# sourceMappingURL=Status.js.map