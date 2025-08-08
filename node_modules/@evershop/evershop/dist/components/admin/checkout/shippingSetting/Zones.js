import Zone from '@components/admin/checkout/shippingSetting/Zone';
import PropTypes from 'prop-types';
import React from 'react';
export function Zones({ countries, getZones, zones }) {
    return (React.createElement(React.Fragment, null, zones.map((zone) => (React.createElement(Zone, { zone: zone, getZones: getZones, countries: countries, key: zone.uuid })))));
}
Zones.propTypes = {
    countries: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        provinces: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }))
    })).isRequired,
    zones: PropTypes.arrayOf(PropTypes.shape({
        uuid: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        country: PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired
        }),
        provinces: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired
        })).isRequired,
        methods: PropTypes.arrayOf(PropTypes.shape({
            uuid: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        })).isRequired,
        deleteApi: PropTypes.string.isRequired
    })).isRequired,
    getZones: PropTypes.func.isRequired
};
//# sourceMappingURL=Zones.js.map