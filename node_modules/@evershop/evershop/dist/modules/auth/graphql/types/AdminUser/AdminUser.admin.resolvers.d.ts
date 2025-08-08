declare namespace _default {
    namespace Query {
        function adminUser(root: any, { id }: {
            id: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function currentAdminUser(root: any, args: any, { user }: {
            user: any;
        }): Record<string, any> | null;
        function adminUsers(_: any, { filters }: {
            filters?: never[] | undefined;
        }, { pool }: {
            pool: any;
        }): Promise<{
            items: Record<string, any>[];
            total: any;
            currentFilters: {
                key: string;
                operation: string;
                value: any;
            }[];
        }>;
    }
}
export default _default;
