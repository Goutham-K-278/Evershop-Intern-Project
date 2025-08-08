declare namespace _default {
    namespace Query {
        function provinces(_: any, { countries }: {
            countries?: never[] | undefined;
        }): import("../../../../../lib/locale/provinces.js").Province[];
    }
    namespace Province {
        function name(province: any): any;
        function countryCode(province: any): any;
        function code(province: any): any;
    }
}
export default _default;
