declare namespace _default {
    namespace Product {
        function image(product: any): Promise<{
            thumb: any;
            single: any;
            listing: any;
            alt: any;
            url: any;
            uuid: any;
            origin: any;
        } | null>;
        function gallery(product: any, _: any, { pool }: {
            pool: any;
        }): Promise<{
            id: any;
            alt: any;
            url: any;
            uuid: any;
            origin: any;
            thumb: any;
            single: any;
            listing: any;
        }[]>;
    }
}
export default _default;
