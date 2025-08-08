import Error from '@components/common/form/fields/Error';
import PropTypes from 'prop-types';
import React from 'react';
import '../Field.scss';
import { _ } from '../../../../lib/locale/translate/_.js';
const Select = React.forwardRef((props, ref) => {
    const { name, placeholder, disableDefaultOption, value, label, onChange, error, instruction, options } = props;
    const [_value, setValue] = React.useState(value || '');
    React.useEffect(() => {
        setValue(value);
    }, [value]);
    return (React.createElement("div", { className: `form-field-container dropdown ${error ? 'has-error' : null}` },
        label && React.createElement("label", { htmlFor: name }, label),
        React.createElement("div", { className: "field-wrapper flex flex-grow items-baseline" },
            React.createElement("select", { className: "form-field", id: name, name: name, placeholder: placeholder, value: _value, onChange: (e) => {
                    if (onChange) {
                        onChange.call(window, e);
                    }
                    else {
                        setValue(e.target.value);
                    }
                }, ref: ref },
                React.createElement("option", { value: "", disabled: disableDefaultOption }, placeholder || _('Please select')),
                options &&
                    options.map((option, key) => (React.createElement("option", { key: key, value: option.value }, option.text)))),
            React.createElement("div", { className: "field-border" }),
            React.createElement("div", { className: "field-suffix" },
                React.createElement("svg", { viewBox: "0 0 20 20", width: "1rem", height: "1.25rem", focusable: "false", "aria-hidden": "true" },
                    React.createElement("path", { d: "m10 16-4-4h8l-4 4zm0-12 4 4H6l4-4z" })))),
        instruction && (React.createElement("div", { className: "field-instruction mt-sm" }, instruction)),
        React.createElement(Error, { error: error })));
});
Select.propTypes = {
    error: PropTypes.string,
    instruction: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        text: PropTypes.string
    })),
    placeholder: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disableDefaultOption: PropTypes.bool
};
Select.defaultProps = {
    error: undefined,
    instruction: undefined,
    label: undefined,
    onChange: undefined,
    options: [],
    placeholder: undefined,
    name: undefined,
    value: undefined,
    disableDefaultOption: true
};
export { Select };
//# sourceMappingURL=Select.js.map