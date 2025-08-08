declare namespace _default {
    namespace Query {
        function taxClasses(_: any, { filters }: {
            filters: any;
        }): Promise<TaxClassCollection>;
        function taxClass(_: any, { id }: {
            id: any;
        }): Promise<Record<string, any>>;
    }
    namespace TaxClass {
        function rates(parent: any): Promise<Record<string, any>[]>;
        function addRateApi({ uuid }: {
            uuid: any;
        }): Promise<string>;
    }
    namespace TaxRate {
        function updateApi({ uuid }: {
            uuid: any;
        }): Promise<string>;
        function deleteApi({ uuid }: {
            uuid: any;
        }): Promise<string>;
    }
}
export default _default;
import { TaxClassCollection } from '../../../services/TaxClassCollection.js';
