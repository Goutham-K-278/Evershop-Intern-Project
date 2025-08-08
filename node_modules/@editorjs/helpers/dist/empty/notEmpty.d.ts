/**
 * True if passed variable is not null/undefined/''/{}
 * @param v value to check
 */
export declare function notEmpty<T>(v: T | undefined | null | object): v is T;
