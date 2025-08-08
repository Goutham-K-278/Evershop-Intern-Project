declare namespace _default {
    namespace Query {
        function orders(_: any, { filters }: {
            filters?: never[] | undefined;
        }): Promise<OrderCollection>;
    }
    namespace Order {
        function editUrl({ uuid }: {
            uuid: any;
        }): string;
        function createShipmentApi({ uuid }: {
            uuid: any;
        }): string;
        function cancelApi({ uuid }: {
            uuid: any;
        }): string;
        function customerUrl({ customerId }: {
            customerId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<string | null>;
    }
    namespace Shipment {
        function updateShipmentApi({ orderUuid, uuid }: {
            orderUuid: any;
            uuid: any;
        }): string;
    }
}
export default _default;
import { OrderCollection } from '../../../services/OrderCollection.js';
