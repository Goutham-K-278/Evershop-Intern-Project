/**
 * Returns a function, that, when invoked, will only be triggered at most once during a given window of time.
 * @param func - function to throttle
 * @param wait - function will be called only once for that period
 * @param options - Normally, the throttled function will run as much as it can
 *                  without ever going more than once per `wait` duration;
 *                  but if you'd like to disable the execution on the leading edge, pass
 *                  `{leading: false}`. To disable execution on the trailing edge, ditto.
 */
export declare function throttle(func: any, wait: any, options?: {
    /**
     * Optional leading argument
     */
    leading?: boolean;
    /**
     * Optional trailing argument
     */
    trailing?: boolean;
} | undefined): () => void;
