export function Province({ selectedCountry, selectedProvince, allowCountries, fieldName }: {
    selectedCountry: any;
    selectedProvince: any;
    allowCountries: any;
    fieldName?: string | undefined;
}): React.JSX.Element | null;
export namespace Province {
    namespace propTypes {
        let selectedProvince: any;
        let selectedCountry: any;
        let allowCountries: any;
        let fieldName: any;
    }
    namespace defaultProps {
        let selectedProvince_1: string;
        export { selectedProvince_1 as selectedProvince };
        let selectedCountry_1: string;
        export { selectedCountry_1 as selectedCountry };
        let fieldName_1: string;
        export { fieldName_1 as fieldName };
    }
}
import React from 'react';
