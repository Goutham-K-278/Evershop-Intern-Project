import { Field } from '@components/common/form/Field';
import PropTypes from 'prop-types';
import React from 'react';
import { _ } from '../../../../../lib/locale/translate/_.js';
export function Country({ allowCountries, selectedCountry, setSelectedCountry, fieldName = 'country' }) {
    const onChange = (e) => {
        setSelectedCountry(e.target.value);
    };
    return (React.createElement("div", { style: { marginTop: '1rem' } },
        React.createElement(Field, { type: "select", value: selectedCountry || '', label: _('Country'), name: fieldName, placeholder: _('Country'), onChange: onChange, validationRules: [
                {
                    rule: 'notEmpty',
                    message: _('Country is required')
                }
            ], options: allowCountries.map((c) => ({ value: c.code, text: c.name })) })));
}
Country.propTypes = {
    allowCountries: PropTypes.arrayOf(PropTypes.shape({
        code: PropTypes.string,
        name: PropTypes.string
    })).isRequired,
    selectedCountry: PropTypes.string,
    setSelectedCountry: PropTypes.func.isRequired,
    fieldName: PropTypes.string
};
Country.defaultProps = {
    fieldName: 'country',
    selectedCountry: null
};
//# sourceMappingURL=Country.js.map