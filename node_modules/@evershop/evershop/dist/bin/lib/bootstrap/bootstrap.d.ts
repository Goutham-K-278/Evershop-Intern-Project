interface Module {
    path: string;
}
export type BootstrapContext = {
    command?: string;
    env?: 'production' | 'development' | 'test';
    process?: 'main' | 'cronjob' | 'event';
};
/**
 * Loads and runs the bootstrap script from a module directory.
 */
export declare const loadBootstrapScript: (module: Module, context?: BootstrapContext) => Promise<void>;
export {};
