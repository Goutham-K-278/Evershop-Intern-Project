function createWriteOnceMap() {
    const _map = new Map();
    return {
        /**
         * Set a value once. Throws if the key already exists.
         */
        setOnce(key, value) {
            if (_map.has(key)) {
                throw new Error(`Key "${String(key)}" is already set.`);
            }
            _map.set(key, value);
        },
        /**
         * Get a **cloned copy** of the value. This ensures that the original value
         * cannot be modified outside of this map.
         */
        get(key) {
            const val = _map.get(key);
            return val !== undefined ? structuredClone(val) : undefined;
        },
        has(key) {
            return _map.has(key);
        },
        keys() {
            return Array.from(_map.keys()).map((key) => String(key));
        },
        getAll() {
            const result = {};
            for (const [key, value] of _map.entries()) {
                result[String(key)] = structuredClone(value);
            }
            return result;
        }
    };
}
/**
 * Retrieves the delegate manager for the given request.
 * @param request The request object containing the delegate manager.
 * @template T The type of the delegate.
 * @returns The delegate manager.
 */
export function getDelegateManager(request) {
    var _a;
    return ((_a = request === null || request === void 0 ? void 0 : request.locals) === null || _a === void 0 ? void 0 : _a.delegates) || createWriteOnceMap();
}
/**
 * Checks if a delegate exists for the given ID in the request.
 * @param id The delegate ID to check.
 * @template T The type of the delegate.
 * @param request The request object.
 * @returns True if the delegate exists, false otherwise.
 */
export function hasDelegate(id, request) {
    return getDelegateManager(request).has(id);
}
/**
 * Retrieves a delegate value for the given ID.
 * @param id The delegate ID to retrieve.
 * @template T The type of the delegate.
 * @param request The request object.
 * @returns The delegate value or undefined if not found.
 */
export function getDelegate(id, request) {
    return getDelegateManager(request).get(id);
}
export function getDelegates(request) {
    return getDelegateManager(request).getAll();
}
/**
 * Sets a delegate for the given request object.
 * @param id The delegate ID.
 * @param value The delegate value.
 * @param request The request object.
 */
export function setDelegate(id, value, request) {
    if (!request.locals) {
        request.locals = {};
    }
    if (!request.locals.delegates) {
        request.locals.delegates = createWriteOnceMap();
    }
    request.locals.delegates.setOnce(id, value);
}
//# sourceMappingURL=delegate.js.map