type Hook = {
    callback: Function;
    priority: number;
};
export declare enum HookPosition {
    BEFORE = "before",
    AFTER = "after"
}
type HookStorage = Map<string, Hook[]>;
export declare function hookAfter(funcName: string, callback: Function, priority?: number): void;
export declare function hookBefore(funcName: string, callback: Function, priority?: number): void;
export declare function hookable<T extends Function>(originalFunction: T, context?: any): T;
export declare function getHooks(): {
    beforeHooks: HookStorage;
    afterHooks: HookStorage;
};
export declare function clearHooks(): void;
export declare function lockHooks(): void;
export {};
