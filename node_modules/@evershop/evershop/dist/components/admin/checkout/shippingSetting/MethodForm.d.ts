export default MethodForm;
declare function MethodForm({ saveMethodApi, closeModal, getZones, method }: {
    saveMethodApi: any;
    closeModal: any;
    getZones: any;
    method: any;
}): React.JSX.Element;
declare namespace MethodForm {
    namespace propTypes {
        let saveMethodApi: any;
        let closeModal: any;
        let getZones: any;
        let method: any;
    }
    namespace defaultProps {
        let method_1: null;
        export { method_1 as method };
    }
}
import React from 'react';
