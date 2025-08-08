export type Setting = {
    name: string;
    value: any;
};
export declare function getSetting<T>(name: string, defaultValue: T): Promise<T>;
export declare function refreshSetting(): Promise<void>;
