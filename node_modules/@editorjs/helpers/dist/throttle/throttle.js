/**
 * Returns a function, that, when invoked, will only be triggered at most once during a given window of time.
 * @param func - function to throttle
 * @param wait - function will be called only once for that period
 * @param options - Normally, the throttled function will run as much as it can
 *                  without ever going more than once per `wait` duration;
 *                  but if you'd like to disable the execution on the leading edge, pass
 *                  `{leading: false}`. To disable execution on the trailing edge, ditto.
 */
export function throttle(func, wait, options = undefined) {
    let context;
    let args;
    let result;
    let timeout = null;
    let previous = 0;
    if (!options) {
        options = {};
    }
    const later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
        result = func.apply(context, args);
        if (timeout === null) {
            context = args = null;
        }
    };
    return function () {
        const now = Date.now();
        if (!previous && options.leading === false) {
            previous = now;
        }
        const remaining = wait - (now - previous);
        // eslint-disable-next-line @typescript-eslint/no-this-alias, @typescript-eslint/no-unsafe-assignment
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            result = func.apply(context, args);
            if (timeout === null) {
                context = args = null;
            }
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}
//# sourceMappingURL=throttle.js.map