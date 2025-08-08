export default ZoneForm;
declare function ZoneForm({ method, saveZoneApi, countries, closeModal, getZones, zone }: {
    method: any;
    saveZoneApi: any;
    countries: any;
    closeModal: any;
    getZones: any;
    zone: any;
}): React.JSX.Element;
declare namespace ZoneForm {
    namespace propTypes {
        let method: any;
        let saveZoneApi: any;
        let countries: any;
        let closeModal: any;
        let getZones: any;
        let zone: any;
    }
    namespace defaultProps {
        let method_1: string;
        export { method_1 as method };
        let zone_1: null;
        export { zone_1 as zone };
    }
}
import React from 'react';
