declare namespace _default {
    namespace DateTime {
        function value(dateTime: any): any;
        function timezone(): Promise<string>;
        function text(value: any, { format }: {
            format?: string | undefined;
        }): Promise<any>;
    }
}
export default _default;
