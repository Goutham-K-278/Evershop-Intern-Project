declare namespace _default {
    export { GraphQLJSON as JSON };
    export namespace Query {
        function coupon(root: any, { id }: {
            id: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function coupons(_: any, { filters }: {
            filters?: never[] | undefined;
        }, { user }: {
            user: any;
        }): Promise<never[] | CouponCollection>;
    }
    export namespace Coupon {
        function targetProducts({ targetProducts }: {
            targetProducts: any;
        }): Record<string, any> | null;
        function condition({ condition }: {
            condition: any;
        }): Record<string, any> | null;
        function userCondition({ userCondition }: {
            userCondition: any;
        }): Record<string, any> | null;
        function buyxGety({ buyxGety }: {
            buyxGety: any;
        }): any;
        function editUrl({ uuid }: {
            uuid: any;
        }): string;
        function updateApi(coupon: any): string;
        function deleteApi(coupon: any): string;
    }
}
export default _default;
import { GraphQLJSON } from 'graphql-type-json';
import { CouponCollection } from '../../../services/CouponCollection.js';
