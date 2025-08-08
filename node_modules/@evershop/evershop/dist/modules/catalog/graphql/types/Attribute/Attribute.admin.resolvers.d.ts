declare namespace _default {
    namespace Query {
        function attributes(_: any, { filters }: {
            filters?: never[] | undefined;
        }): Promise<AttributeCollection>;
        function attributeGroups(_: any, { filters }: {
            filters?: never[] | undefined;
        }): Promise<AttributeGroupCollection>;
    }
    namespace AttributeGroup {
        export function attributes_1(group: any, { filters }: {
            filters?: never[] | undefined;
        }): Promise<AttributeCollection>;
        export { attributes_1 as attributes };
        export function updateApi(group: any): string;
    }
    namespace Attribute {
        export function groups(attribute: any, { filters }: {
            filters?: never[] | undefined;
        }): Promise<AttributeGroupCollection>;
        export function editUrl({ uuid }: {
            uuid: any;
        }): string;
        export function updateApi_1(attribute: any): string;
        export { updateApi_1 as updateApi };
        export function deleteApi(attribute: any): string;
    }
}
export default _default;
import { AttributeCollection } from '../../../../../modules/catalog/services/AttributeCollection.js';
import { AttributeGroupCollection } from '../../../../../modules/catalog/services/AttributeGroupCollection.js';
