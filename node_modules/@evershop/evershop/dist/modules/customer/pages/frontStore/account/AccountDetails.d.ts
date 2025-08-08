declare function AccountDetails({ account }: {
    account: any;
}): React.JSX.Element;
declare namespace AccountDetails {
    namespace propTypes {
        let account: any;
    }
}
export default AccountDetails;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    account: currentCustomer {\n      uuid\n      fullName\n      email\n    }\n  }\n";
import React from 'react';
