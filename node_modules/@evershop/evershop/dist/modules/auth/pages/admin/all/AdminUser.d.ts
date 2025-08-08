declare function AdminUser({ adminUser, logoutUrl, loginPage }: {
    adminUser: any;
    logoutUrl: any;
    loginPage: any;
}): React.JSX.Element | null;
declare namespace AdminUser {
    namespace propTypes {
        let adminUser: any;
        let loginPage: any;
        let logoutUrl: any;
    }
    namespace defaultProps {
        let adminUser_1: null;
        export { adminUser_1 as adminUser };
    }
}
export default AdminUser;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    adminUser: currentAdminUser {\n      adminUserId\n      fullName\n      email\n    },\n    logoutUrl: url(routeId: \"adminLogoutJson\"),\n    loginPage: url(routeId: \"adminLogin\")\n  }\n";
import React from 'react';
