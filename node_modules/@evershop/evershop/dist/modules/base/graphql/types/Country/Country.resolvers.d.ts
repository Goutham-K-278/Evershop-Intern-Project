declare namespace _default {
    namespace Query {
        function countries(_: any, argument: any): import("../../../../../lib/locale/countries.js").Country[];
        function allowedCountries(): Promise<import("../../../../../lib/locale/countries.js").Country[]>;
    }
    namespace Country {
        function name(country: any): any;
        function code(country: any): any;
        function provinces(country: any): import("../../../../../lib/locale/provinces.js").Province[];
    }
}
export default _default;
