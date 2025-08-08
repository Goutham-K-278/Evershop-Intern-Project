export function Country({ allowCountries, selectedCountry, setSelectedCountry, fieldName }: {
    allowCountries: any;
    selectedCountry: any;
    setSelectedCountry: any;
    fieldName?: string | undefined;
}): React.JSX.Element;
export namespace Country {
    namespace propTypes {
        let allowCountries: any;
        let selectedCountry: any;
        let setSelectedCountry: any;
        let fieldName: any;
    }
    namespace defaultProps {
        let fieldName_1: string;
        export { fieldName_1 as fieldName };
        let selectedCountry_1: null;
        export { selectedCountry_1 as selectedCountry };
    }
}
import React from 'react';
