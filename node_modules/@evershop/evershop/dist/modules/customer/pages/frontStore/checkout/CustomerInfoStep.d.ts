declare function ContactInformationStep({ cart: { customerEmail, addContactInfoApi }, currentCustomer, loginUrl }: {
    cart: {
        customerEmail: any;
        addContactInfoApi: any;
    };
    currentCustomer: any;
    loginUrl: any;
}): React.JSX.Element | null;
declare namespace ContactInformationStep {
    namespace propTypes {
        let loginUrl: any;
        let currentCustomer: any;
        let cart: any;
    }
    namespace defaultProps {
        let currentCustomer_1: null;
        export { currentCustomer_1 as currentCustomer };
    }
}
export default ContactInformationStep;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    cart {\n      customerEmail\n      addContactInfoApi\n    }\n    currentCustomer {\n      email\n    }\n    loginUrl: url(routeId: \"login\")\n  }\n";
import React from 'react';
