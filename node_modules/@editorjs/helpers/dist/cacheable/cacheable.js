/**
 * Decorator which provides ability to cache method or accessor result
 * @param target - target instance or constructor function
 * @param propertyKey - method or accessor name
 * @param descriptor - property descriptor
 */
export function cacheable(target, propertyKey, descriptor) {
    const propertyToOverride = (descriptor.value !== undefined) ? 'value' : 'get';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const originalMethod = descriptor[propertyToOverride];
    const cacheKey = `#${propertyKey}Cache`;
    /**
     * Override get or value descriptor property to cache return value
     * @param args - method args
     */
    descriptor[propertyToOverride] = function (...args) {
        /**
         * If there is no cache, create it
         */
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (this[cacheKey] === undefined) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
            this[cacheKey] = originalMethod.apply(this, args);
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
        return this[cacheKey];
    };
    /**
     * If get accessor has been overridden, we need to override set accessor to clear cache
     * @param value - value to set
     */
    if (propertyToOverride === 'get' && descriptor.set) {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        const originalSet = descriptor.set;
        descriptor.set = function (value) {
            delete target[cacheKey];
            originalSet.apply(this, value);
        };
    }
    return descriptor;
}
//# sourceMappingURL=cacheable.js.map