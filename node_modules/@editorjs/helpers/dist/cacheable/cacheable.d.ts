/**
 * Decorator which provides ability to cache method or accessor result
 * @param target - target instance or constructor function
 * @param propertyKey - method or accessor name
 * @param descriptor - property descriptor
 */
export declare function cacheable<Target, Value, Arguments extends unknown[] = unknown[]>(target: Target, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor;
