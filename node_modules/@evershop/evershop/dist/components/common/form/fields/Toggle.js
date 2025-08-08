import Error from '@components/common/form/fields/Error';
import PropTypes from 'prop-types';
import React from 'react';
import './Toggle.scss';
function Enabled({ onClick }) {
    return (React.createElement("a", { href: "#", className: "toggle enabled", onClick: (e) => {
            e.preventDefault();
            onClick();
        } },
        React.createElement("span", null)));
}
Enabled.propTypes = {
    onClick: PropTypes.func.isRequired
};
function Disabled({ onClick }) {
    return (React.createElement("a", { href: "#", className: "toggle disabled", onClick: (e) => {
            e.preventDefault();
            onClick();
        } },
        React.createElement("span", null)));
}
Disabled.propTypes = {
    onClick: PropTypes.func.isRequired
};
const isBool = (value) => typeof value === 'boolean';
const isEnable = (value) => (isBool(value) ? value : parseInt(value, 10) === 1);
const getValue = (value) => (isBool(value) ? value : parseInt(value, 10) || 0);
const getOppositeValue = (value) => {
    if (isBool(value)) {
        return !value;
    }
    if (value === 1) {
        return 0;
    }
    return 1;
};
function Toggle({ name, value, label, onChange, error, instruction }) {
    const [_value, setValue] = React.useState(getValue(value));
    React.useEffect(() => {
        setValue(getValue(value));
    }, [value]);
    const onChangeFunc = () => {
        const newVal = getOppositeValue(_value);
        setValue(newVal);
        if (onChange) {
            onChange.call(window, newVal);
        }
    };
    return (React.createElement("div", { className: `form-field-container ${error ? 'has-error' : null}` },
        label && React.createElement("label", { htmlFor: name }, label),
        React.createElement("input", { type: "hidden", value: +getValue(_value), name: name }),
        React.createElement("div", { className: "field-wrapper flex flex-grow" },
            isEnable(_value) && React.createElement(Enabled, { onClick: () => onChangeFunc() }),
            !isEnable(_value) && React.createElement(Disabled, { onClick: () => onChangeFunc() })),
        instruction && (React.createElement("div", { className: "field-instruction mt-sm" }, instruction)),
        React.createElement(Error, { error: error })));
}
Toggle.propTypes = {
    error: PropTypes.string,
    instruction: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool
    ]).isRequired
};
Toggle.defaultProps = {
    error: undefined,
    instruction: undefined,
    label: undefined,
    onChange: undefined
};
export { Toggle };
//# sourceMappingURL=Toggle.js.map