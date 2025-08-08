import Error from '@components/common/form/fields/Error';
import PropTypes from 'prop-types';
import React from 'react';
import '../Field.scss';
function TextArea({ name, value, label, onChange, error, instruction, placeholder }) {
    const [_value, setValue] = React.useState(value || '');
    React.useEffect(() => {
        setValue(value || '');
    }, [value]);
    const onChangeFunc = (e) => {
        setValue(e.target.value);
        if (onChange)
            onChange.call(window, e.target.value);
    };
    return (React.createElement("div", { className: `form-field-container ${error ? 'has-error' : null}` },
        label && React.createElement("label", { htmlFor: name }, label),
        React.createElement("div", { className: "field-wrapper flex flex-grow" },
            React.createElement("textarea", { type: "text", className: "form-field", id: name, name: name, placeholder: placeholder, value: _value, onChange: onChangeFunc }),
            React.createElement("div", { className: "field-border" })),
        instruction && (React.createElement("div", { className: "field-instruction mt-sm" }, instruction)),
        React.createElement(Error, { error: error })));
}
TextArea.propTypes = {
    error: PropTypes.string,
    instruction: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.string,
    placeholder: PropTypes.string
};
TextArea.defaultProps = {
    error: undefined,
    instruction: undefined,
    label: undefined,
    onChange: undefined,
    value: undefined,
    placeholder: undefined
};
export { TextArea };
//# sourceMappingURL=Textarea.js.map