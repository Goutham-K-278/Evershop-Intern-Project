declare namespace _default {
    namespace Query {
        function shippingZones(): Promise<Record<string, any>[]>;
        function shippingZone(_: any, { id }: {
            id: any;
        }): Promise<Record<string, any>>;
    }
    namespace ShippingZone {
        function methods(parent: any): Promise<Record<string, any>[]>;
        function country({ country }: {
            country: any;
        }): import("../../../../../lib/locale/countries.js").Country | null;
        function provinces({ shippingZoneId }: {
            shippingZoneId: any;
        }): Promise<any[]>;
        function updateApi({ uuid }: {
            uuid: any;
        }): string;
        function deleteApi({ uuid }: {
            uuid: any;
        }): string;
        function addMethodApi({ uuid }: {
            uuid: any;
        }): string;
        function removeMethodApi({ uuid }: {
            uuid: any;
        }): string;
    }
    namespace ShippingMethodByZone {
        export function updateApi_1({ uuid, zoneId }: {
            uuid: any;
            zoneId: any;
        }): Promise<string>;
        export { updateApi_1 as updateApi };
        export function deleteApi_1({ uuid, zoneId }: {
            uuid: any;
            zoneId: any;
        }): Promise<string>;
        export { deleteApi_1 as deleteApi };
    }
    namespace WeightBasedCostItem {
        function minWeight({ min_weight }: {
            min_weight: any;
        }): any;
    }
    namespace PriceBasedCostItem {
        function minPrice({ min_price }: {
            min_price: any;
        }): any;
    }
}
export default _default;
