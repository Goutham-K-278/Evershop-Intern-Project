export type Theme = {
    name: string;
    path: string;
    srcPath?: string;
};
export declare function getEnabledTheme(): Theme | null;
