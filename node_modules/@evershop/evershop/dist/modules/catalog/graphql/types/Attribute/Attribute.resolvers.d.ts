declare namespace _default {
    namespace Query {
        function attribute(_: any, { id }: {
            id: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
    }
    namespace Attribute {
        function options(attribute: any, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any>[]>;
    }
}
export default _default;
