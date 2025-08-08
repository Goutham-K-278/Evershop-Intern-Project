import Error from '@components/common/form/fields/Error';
import PropTypes from 'prop-types';
import React from 'react';
import '../Field.scss';
function CheckedIcon() {
    return (React.createElement("span", { className: "checkbox-checked" },
        React.createElement("svg", { viewBox: "0 0 20 20", focusable: "false", "aria-hidden": "true" },
            React.createElement("path", { d: "m8.315 13.859-3.182-3.417a.506.506 0 0 1 0-.684l.643-.683a.437.437 0 0 1 .642 0l2.22 2.393 4.942-5.327a.436.436 0 0 1 .643 0l.643.684a.504.504 0 0 1 0 .683l-5.91 6.35a.437.437 0 0 1-.642 0" }))));
}
function UnCheckedIcon() {
    return React.createElement("span", { className: "checkbox-unchecked" });
}
function Checkbox({ name, label, onChange, error, instruction, isChecked = false }) {
    const [_isChecked, setChecked] = React.useState(isChecked);
    const onChangeFunc = (e) => {
        setChecked(e.target.checked);
        if (onChange)
            onChange.call(window, e);
    };
    React.useEffect(() => {
        setChecked(!!isChecked);
    }, [isChecked]);
    return (React.createElement("div", { className: `form-field-container ${error ? 'has-error' : null}` },
        React.createElement("div", { className: "field-wrapper radio-field" },
            React.createElement("label", { htmlFor: name },
                React.createElement("input", { type: "checkbox", id: name, value: _isChecked ? 1 : 0, checked: _isChecked, onChange: onChangeFunc }),
                _isChecked === true && React.createElement(CheckedIcon, null),
                _isChecked === false && React.createElement(UnCheckedIcon, null),
                React.createElement("span", { className: "pl-2" }, label),
                React.createElement("input", { type: "hidden", name: name, value: _isChecked ? 1 : 0 }))),
        instruction && (React.createElement("div", { className: "field-instruction mt-sm" }, instruction)),
        React.createElement(Error, { error: error })));
}
Checkbox.propTypes = {
    error: PropTypes.string,
    instruction: PropTypes.string,
    isChecked: PropTypes.bool,
    label: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired
};
Checkbox.defaultProps = {
    error: undefined,
    instruction: '',
    isChecked: false,
    label: '',
    name: undefined
};
export { Checkbox };
//# sourceMappingURL=Checkbox.js.map