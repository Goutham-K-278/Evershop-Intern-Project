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
export function debounce(func, wait, immediate) {
    let timeout = undefined;
    return (...args) => {
        // eslint-disable-next-line @typescript-eslint/no-this-alias, @typescript-eslint/no-unsafe-assignment
        const context = this;
        // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
        const later = () => {
            timeout = undefined;
            if (immediate !== true) {
                func.apply(context, args);
            }
        };
        const callNow = immediate === true && timeout !== undefined;
        window.clearTimeout(timeout);
        timeout = window.setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
//# sourceMappingURL=debounce.js.map