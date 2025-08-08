declare function ShippingSetting({ createShippingZoneApi }: {
    createShippingZoneApi: any;
}): React.JSX.Element;
declare namespace ShippingSetting {
    namespace propTypes {
        let createShippingZoneApi: any;
    }
}
export default ShippingSetting;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    createShippingZoneApi: url(routeId: \"createShippingZone\")\n  }\n";
import React from 'react';
