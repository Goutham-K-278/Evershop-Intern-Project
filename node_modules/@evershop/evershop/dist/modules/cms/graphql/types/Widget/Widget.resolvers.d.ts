declare namespace _default {
    namespace Query {
        function widget(root: any, { id }: {
            id: any;
        }, { pool }: {
            pool: any;
        }): Promise<Record<string, any> | null>;
        function widgets(_: any, { filters }: {
            filters?: never[] | undefined;
        }, { user }: {
            user: any;
        }): Promise<WidgetCollection>;
        function widgetTypes(): {
            code: string;
            name: string;
            description: string;
            settingComponent: string;
            component: string;
            defaultSettings: Record<string, any>;
            createWidgetUrl: string;
        }[];
        function widgetType(_: any, { code }: {
            code: any;
        }): {
            code: string;
            name: string;
            description: string;
            settingComponent: string;
            component: string;
            defaultSettings: Record<string, any>;
            createWidgetUrl: string;
        } | null;
        function textWidget(_: any, { text, className }: {
            text: any;
            className: any;
        }): {
            text: any;
            className: any;
        };
        function basicMenuWidget(_: any, { settings }: {
            settings: any;
        }, { pool }: {
            pool: any;
        }): Promise<{
            menus: never[];
            isMain?: undefined;
            className?: undefined;
        } | {
            menus: any;
            isMain: boolean;
            className: any;
        }>;
    }
    namespace Widget {
        function editUrl({ uuid }: {
            uuid: any;
        }): string;
        function updateApi(widget: any): string;
        function deleteApi(widget: any): string;
    }
}
export default _default;
import { WidgetCollection } from '../../../services/WidgetCollection.js';
