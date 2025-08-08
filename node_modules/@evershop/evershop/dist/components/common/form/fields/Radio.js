import Error from '@components/common/form/fields/Error';
import PropTypes from 'prop-types';
import React from 'react';
import '../Field.scss';
function CheckedIcon() {
    return (React.createElement("span", { className: "radio-checked" },
        React.createElement("span", null)));
}
function UnCheckedIcon() {
    return React.createElement("span", { className: "radio-unchecked" });
}
function Radio({ name, value, label, onChange, error, instruction, options }) {
    const [_value, setValue] = React.useState(value || '');
    const onChangeFunc = (e) => {
        setValue(e.target.value);
        if (onChange)
            onChange.call(window, e.target.value);
    };
    React.useEffect(() => {
        setValue(value);
    }, [value]);
    return (React.createElement("div", { className: `form-field-container ${error ? 'has-error' : null}` },
        label && React.createElement("label", { htmlFor: name }, label),
        React.createElement("div", { className: "field-wrapper radio-field" }, options.map((o, i) => (React.createElement("div", { key: o.value },
            React.createElement("label", { htmlFor: name + i, className: "flex" },
                React.createElement("input", { type: "radio", name: name, id: name + i, value: o.value, checked: _value == o.value, onChange: onChangeFunc }),
                _value == o.value && React.createElement(CheckedIcon, null),
                _value != o.value && React.createElement(UnCheckedIcon, null),
                React.createElement("span", { className: "pl-4" }, o.text)))))),
        instruction && (React.createElement("div", { className: "field-instruction mt-sm" }, instruction)),
        React.createElement(Error, { error: error })));
}
Radio.propTypes = {
    error: PropTypes.string,
    instruction: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        text: PropTypes.string
    })).isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Radio.defaultProps = {
    error: undefined,
    instruction: undefined,
    label: undefined,
    onChange: undefined,
    value: undefined
};
export { Radio };
//# sourceMappingURL=Radio.js.map