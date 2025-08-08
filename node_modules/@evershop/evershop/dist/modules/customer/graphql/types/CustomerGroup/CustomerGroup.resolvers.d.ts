declare namespace _default {
    namespace Customer {
        function group({ groupId }: {
            groupId: any;
        }, _: any, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
    }
}
export default _default;
