import { Select } from '@components/common/form/fields/Select';
import PropTypes from 'prop-types';
import React from 'react';
import { useQuery } from 'urql';
const GroupsQuery = `
  query {
    groups: attributeGroups {
      items {
        value: attributeGroupId
        text: groupName
      }
    }
  }
`;
export default function GroupHeader({ id, currentFilters = [] }) {
    const [current, setCurrent] = React.useState('');
    const [result] = useQuery({
        query: GroupsQuery
    });
    const { data, fetching, error } = result;
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
        const filter = currentFilters.find((f) => f.key === 'group') || {
            value: ''
        };
        setCurrent(filter.value);
    }, []);
    return (React.createElement("th", { className: "column" },
        React.createElement("div", { className: "table-header status-header" },
            React.createElement("div", { className: "title", style: { marginBottom: '1rem' } },
                React.createElement("span", null, "Attribute Group")),
            React.createElement("div", { className: "filter" },
                fetching && React.createElement("div", null, "Loading"),
                error && React.createElement("div", null, error.message),
                !fetching && !error && (React.createElement(Select, { onChange: (e) => onChange(e), className: "form-control", value: current, options: [{ value: 'all', text: 'All' }].concat(data.groups.items) }))))));
}
GroupHeader.propTypes = {
    id: PropTypes.string.isRequired,
    currentFilters: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired
    }))
};
GroupHeader.defaultProps = {
    currentFilters: []
};
//# sourceMappingURL=GroupHeader.js.map