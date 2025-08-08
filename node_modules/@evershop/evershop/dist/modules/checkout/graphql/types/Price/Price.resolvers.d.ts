declare namespace _default {
    namespace Price {
        function value(rawPrice: any): number;
        function currency(_: any, { currency }: {
            currency: any;
        }): Promise<any>;
        function text(rawPrice: any, { currency }: {
            currency: any;
        }): Promise<string>;
    }
}
export default _default;
