export type RegistryValue<T> = {
    initValue: T;
    context: Record<string, any>;
    value: T;
    processors: {
        callback: SyncProcessor<T> | AsyncProcessor<T>;
        priority: number;
    }[];
};
export type SyncProcessor<T> = (value: T) => T;
export type AsyncProcessor<T> = (value: T) => Promise<T>;
/**
 * Get the value from the registry
 * @param name - The name of the value
 * @param initialization - The initialization value or a function that returns the value
 * @param context - The context of the value
 * @param validator - The validator function
 * @returns The value from the registry
 */
export declare function getValue<T>(name: string, initialization: T | AsyncProcessor<T> | SyncProcessor<T>, context?: Record<string, any>, validator?: (value: T) => boolean): Promise<T>;
/**
 * Get the value from the registry
 * @param name - The name of the value
 * @param initialization - The initialization value or a function that returns the value
 * @param context - The context of the value
 * @param validator - The validator function
 * @returns The value from the registry
 */
export declare function getValueSync<T>(name: string, initialization: T | SyncProcessor<T>, context: Record<string, any>, validator?: (value: T) => boolean): T;
export declare function addProcessor<T>(name: string, callback: SyncProcessor<T> | AsyncProcessor<T>, priority?: number): void;
export declare function addFinalProcessor(name: string, callback: SyncProcessor<any> | AsyncProcessor<any>): void;
export declare function getProcessors<T>(name: string): {
    callback: SyncProcessor<T> | AsyncProcessor<T>;
    priority: number;
}[];
export declare function lockRegistry(): void;
