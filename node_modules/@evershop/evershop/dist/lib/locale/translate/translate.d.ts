/**
 * This function is used to translate the text form server side, like from middleware. For templating use the _ function
 */
export declare function translate(enText: string, values?: Record<string, string>): string;
export declare function loadCsv(): Promise<Record<string, string>>;
