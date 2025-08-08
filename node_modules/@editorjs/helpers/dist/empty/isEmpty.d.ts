/**
 * True if passed variable is null/undefined/''/{}
 * @param v value to check
 */
export declare function isEmpty(v: unknown): v is null | undefined | '' | Record<string, never>;
