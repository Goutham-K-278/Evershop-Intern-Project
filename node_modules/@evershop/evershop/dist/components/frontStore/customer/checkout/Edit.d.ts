export function Edit({ customer, addContactInfoApi, email, setEmail, loginUrl }: {
    customer: any;
    addContactInfoApi: any;
    email: any;
    setEmail: any;
    loginUrl: any;
}): React.JSX.Element;
export namespace Edit {
    namespace propTypes {
        let addContactInfoApi: any;
        let email: any;
        let loginUrl: any;
        let setEmail: any;
        let customer: any;
    }
    namespace defaultProps {
        let email_1: string;
        export { email_1 as email };
        let customer_1: null;
        export { customer_1 as customer };
    }
}
import React from 'react';
