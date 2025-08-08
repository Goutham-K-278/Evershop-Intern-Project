declare function BestCustomers({ listUrl, setting }: {
    listUrl: any;
    setting: any;
}): React.JSX.Element;
declare namespace BestCustomers {
    namespace propTypes {
        let setting: any;
        let listUrl: any;
    }
}
export default BestCustomers;
export const query: "\n  query Query {\n    setting {\n      storeCurrency\n    }\n    listUrl: url(routeId: \"productGrid\")\n  }\n";
import React from 'react';
