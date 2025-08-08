import { isFunction } from './isFunction';
/**
 * Check if passed function is a class
 * @param fn - function to check
 * @returns true, if passed fn is a class, false otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isClass(fn) {
    return isFunction(fn) && /^\s*class\s+/.test(fn.toString());
}
//# sourceMappingURL=isClass.js.map