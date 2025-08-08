declare function CustomerCondition({ coupon, groups: { items: customerGroups } }: {
    coupon?: {} | undefined;
    groups: {
        items: any;
    };
}): React.JSX.Element;
declare namespace CustomerCondition {
    namespace propTypes {
        let coupon: any;
        let groups: any;
    }
    namespace defaultProps {
        let coupon_1: {};
        export { coupon_1 as coupon };
        export namespace groups_1 {
            let items: never[];
        }
        export { groups_1 as groups };
    }
}
export default CustomerCondition;
export namespace layout {
    let areaId: string;
    let sortOrder: number;
}
export const query: "\n  query Query {\n    coupon(id: getContextValue('couponId', null)) {\n      userCondition {\n        groups\n        emails\n        purchased\n      }\n    }\n    groups: customerGroups {\n      items {\n        value: customerGroupId\n        name: groupName\n      }\n    }\n  }\n";
import React from 'react';
