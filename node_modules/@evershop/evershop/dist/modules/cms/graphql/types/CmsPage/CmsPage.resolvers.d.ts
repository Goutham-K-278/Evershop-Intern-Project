declare namespace _default {
    namespace Query {
        function cmsPage(root: any, { id }: {
            id: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function cmsPages(_: any, { filters }: {
            filters?: never[] | undefined;
        }, { user }: {
            user: any;
        }): Promise<CMSPageCollection>;
    }
    namespace CmsPage {
        function url({ urlKey }: {
            urlKey: any;
        }): string;
        function editUrl({ uuid }: {
            uuid: any;
        }): string;
        function updateApi(page: any): string;
        function deleteApi(page: any): string;
        function content({ content }: {
            content: any;
        }): any;
    }
}
export default _default;
import { CMSPageCollection } from '../../../services/CMSPageCollection.js';
