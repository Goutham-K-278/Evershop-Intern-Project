import { Card } from '@components/admin/cms/Card';
import Button from '@components/common/form/Button';
import { Field } from '@components/common/form/Field';
import { Form } from '@components/common/form/Form';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
function ZoneForm({ method, saveZoneApi, countries, closeModal, getZones, zone }) {
    var _a;
    const [country, setCountry] = React.useState(countries.find((c) => { var _a; return c.value === ((_a = zone === null || zone === void 0 ? void 0 : zone.country) === null || _a === void 0 ? void 0 : _a.code); }));
    const [provinces, setProvinces] = React.useState(((_a = countries.find((c) => { var _a; return c.value === ((_a = zone === null || zone === void 0 ? void 0 : zone.country) === null || _a === void 0 ? void 0 : _a.code); })) === null || _a === void 0 ? void 0 : _a.provinces) || []);
    const [selectedProvinces, setSelectedProvinces] = React.useState(provinces.filter((p) => { var _a; return (_a = zone === null || zone === void 0 ? void 0 : zone.provinces) === null || _a === void 0 ? void 0 : _a.find((z) => z.code === p.value); }));
    React.useEffect(() => {
        setSelectedProvinces(country === null || country === void 0 ? void 0 : country.provinces.filter((p) => { var _a; return (_a = zone === null || zone === void 0 ? void 0 : zone.provinces) === null || _a === void 0 ? void 0 : _a.find((z) => z.code === p.value); }));
    }, [country]);
    return (React.createElement(Card, { title: "Create a shipping zone" },
        React.createElement(Form, { id: "createShippingZone", method: method || 'POST', action: saveZoneApi, submitBtn: false, onSuccess: async () => {
                await getZones({ requestPolicy: 'network-only' });
                closeModal();
            } },
            React.createElement(Card.Session, { title: "Zone name" },
                React.createElement(Field, { name: "name", type: "text", placeholder: "Enter zone name", validationRules: ['notEmpty'], value: zone === null || zone === void 0 ? void 0 : zone.name })),
            React.createElement(Card.Session, { title: "Country" },
                React.createElement(Select, { name: "country", options: countries, hideSelectedOptions: false, isMulti: false, onChange: (e) => {
                        var _a;
                        setCountry(countries.find((c) => c.value === e.value));
                        setProvinces((_a = countries.find((c) => c.value === e.value)) === null || _a === void 0 ? void 0 : _a.provinces);
                    }, "aria-label": "Select country", value: country })),
            React.createElement(Card.Session, { title: "Provinces/States" },
                React.createElement(Select, { name: "provinces[]", options: provinces, hideSelectedOptions: true, isMulti: true, defaultValue: selectedProvinces, value: selectedProvinces, onChange: (e) => {
                        setSelectedProvinces(e);
                    } })),
            React.createElement(Card.Session, null,
                React.createElement("div", { className: "flex justify-end gap-4" },
                    React.createElement(Button, { title: "Cancel", variant: "secondary", onAction: closeModal }),
                    React.createElement(Button, { title: "Save", variant: "primary", onAction: () => {
                            document.getElementById('createShippingZone').dispatchEvent(new Event('submit', {
                                cancelable: true,
                                bubbles: true
                            }));
                        } }))))));
}
ZoneForm.propTypes = {
    method: PropTypes.string,
    saveZoneApi: PropTypes.string.isRequired,
    countries: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        provinces: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }))
    })).isRequired,
    closeModal: PropTypes.func.isRequired,
    getZones: PropTypes.func.isRequired,
    zone: PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        country: PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired,
        provinces: PropTypes.arrayOf(PropTypes.shape({
            code: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired
    })
};
ZoneForm.defaultProps = {
    method: 'POST',
    zone: null
};
export default ZoneForm;
//# sourceMappingURL=ZoneForm.js.map