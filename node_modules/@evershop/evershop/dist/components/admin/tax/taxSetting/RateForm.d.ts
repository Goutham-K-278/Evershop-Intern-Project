export default MethodForm;
declare function MethodForm({ saveRateApi, closeModal, getTaxClasses, rate }: {
    saveRateApi: any;
    closeModal: any;
    getTaxClasses: any;
    rate: any;
}): React.JSX.Element;
declare namespace MethodForm {
    namespace propTypes {
        let saveRateApi: any;
        let closeModal: any;
        let getTaxClasses: any;
        let rate: any;
    }
    namespace defaultProps {
        let rate_1: null;
        export { rate_1 as rate };
    }
}
import React from 'react';
