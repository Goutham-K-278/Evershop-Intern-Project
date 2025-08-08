declare function Layout({ logoutUrl }: {
    logoutUrl: any;
}): React.JSX.Element;
declare namespace Layout {
    namespace propTypes {
        let logoutUrl: any;
    }
}
export default Layout;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    logoutUrl: url(routeId: \"customerLogoutJson\")\n  }\n";
import React from 'react';
