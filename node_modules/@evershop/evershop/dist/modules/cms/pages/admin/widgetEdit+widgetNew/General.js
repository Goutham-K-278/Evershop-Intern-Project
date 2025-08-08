import { Card } from '@components/admin/cms/Card';
import { Field } from '@components/common/form/Field';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
const components = {
    DropdownIndicator: null
};
const createOption = (label) => ({
    label,
    value: label
});
function AreaInput({ values }) {
    const [inputValue, setInputValue] = React.useState('');
    const [value, setValue] = React.useState(values);
    const handleKeyDown = (event) => {
        if (!inputValue)
            return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
                break;
            default:
                break;
        }
    };
    return (React.createElement(CreatableSelect, { components: components, inputValue: inputValue, name: "area[]", isClearable: true, isMulti: true, menuIsOpen: false, onChange: (newValue) => {
            setValue(newValue);
        }, onInputChange: (newValue) => setInputValue(newValue), onKeyDown: handleKeyDown, placeholder: "Type area and press enter...", value: value }));
}
AreaInput.propTypes = {
    values: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string, value: PropTypes.string }))
};
AreaInput.defaultProps = {
    values: []
};
export default function General({ widget, routes }) {
    var _a;
    const allRoutes = [
        {
            value: 'all',
            label: 'All',
            isAdmin: false,
            isApi: false,
            method: ['GET']
        },
        ...routes
    ];
    return (React.createElement(Card, null,
        React.createElement(Card.Session, { title: "Name" },
            React.createElement(Field, { type: "text", name: "name", value: widget === null || widget === void 0 ? void 0 : widget.name, placeholder: "Name", validationRules: ['notEmpty'] })),
        React.createElement(Card.Session, { title: "Status" },
            React.createElement(Field, { type: "radio", name: "status", options: [
                    { value: 0, text: 'Disabled' },
                    { value: 1, text: 'Enabled' }
                ], value: widget ? widget.status : 1 })),
        React.createElement(Card.Session, { title: "Area" },
            React.createElement(AreaInput, { values: ((_a = widget === null || widget === void 0 ? void 0 : widget.area) === null || _a === void 0 ? void 0 : _a.length) > 0
                    ? widget.area.map((a) => ({ value: a, label: a }))
                    : [] })),
        React.createElement(Card.Session, { title: "Page" },
            React.createElement(Select, { name: "route[]", options: allRoutes.filter((r) => r.isApi === false &&
                    r.isAdmin === false &&
                    r.method.includes('GET') &&
                    r.method.length === 1), hideSelectedOptions: true, isMulti: true, "aria-label": "Select country", defaultValue: (widget === null || widget === void 0 ? void 0 : widget.route)
                    ? allRoutes.filter((r) => widget.route.includes(r.value))
                    : [], className: "page-select relative z-50" })),
        React.createElement(Card.Session, { title: "Sort order" },
            React.createElement(Field, { type: "text", name: "sort_order", value: widget === null || widget === void 0 ? void 0 : widget.sortOrder, placeholder: "Sort order", validationRules: ['notEmpty', 'number'] }))));
}
General.propTypes = {
    widget: PropTypes.shape({
        status: PropTypes.number,
        name: PropTypes.string.isRequired,
        sortOrder: PropTypes.number,
        area: PropTypes.string,
        route: PropTypes.string
    }),
    routes: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
        isApi: PropTypes.bool,
        isAdmin: PropTypes.bool,
        method: PropTypes.arrayOf(PropTypes.string)
    })).isRequired
};
General.defaultProps = {
    widget: null
};
export const layout = {
    areaId: 'rightSide',
    sortOrder: 15
};
export const query = `
  query Query {
    widget(id: getContextValue("widgetId", null)) {
      name
      status
      sortOrder
      area
      route
    }
    routes {
      value: id
      label: name
      isApi
      isAdmin
      method
    }
  }
`;
//# sourceMappingURL=General.js.map