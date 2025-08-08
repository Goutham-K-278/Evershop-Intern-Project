/**
 * Check if passed variable is a function
 * @param fn - function to check
 * @returns true, if passed v is of type funciton, false otherwise
 */
export declare function isFunction(fn: any): fn is (...args: any[]) => any;
