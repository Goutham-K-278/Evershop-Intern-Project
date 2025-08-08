declare namespace _default {
    namespace Query {
        function menu(root: any, _: any, { pool }: {
            pool: any;
        }): Promise<{
            items: {
                name: any;
                url: any;
            }[];
        }>;
    }
}
export default _default;
