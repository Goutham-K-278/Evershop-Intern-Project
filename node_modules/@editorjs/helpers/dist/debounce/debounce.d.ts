/**
 * Debouncing method
 * Call method after passed time
 *
 * Note that this method returns Function and declared variable need to be called
 * @param func - function that we're throttling
 * @param wait - time in milliseconds
 * @param immediate - call now
 * @returns void
 */
export declare function debounce(func: (...args: unknown[]) => void, wait?: number, immediate?: boolean): () => void;
