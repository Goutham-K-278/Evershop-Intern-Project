declare namespace _default {
    namespace Query {
        function pageInfo(root: any, args: any, context: any): {
            url: any;
            title: any;
            description: any;
            keywords: any;
        };
    }
    namespace PageInfo {
        function breadcrumbs(root: any, args: any, context: any): Promise<{
            title: any;
            url: any;
        }[]>;
    }
}
export default _default;
