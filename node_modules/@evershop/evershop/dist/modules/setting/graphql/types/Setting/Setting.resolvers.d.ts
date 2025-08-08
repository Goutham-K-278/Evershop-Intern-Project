declare namespace _default {
    namespace Query {
        function setting(root: any, _: any, { pool }: {
            pool: any;
        }): Promise<any[]>;
    }
    namespace Setting {
        function storeName(setting: any): any;
    }
}
export default _default;
