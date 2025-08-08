import { typeOf } from './typeOf';
/**
 * Checks if passed argument is an object
 * @param v - object to check
 * @returns true, if passed v is of type object, false otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isObject(v) {
    return typeOf(v) === 'object';
}
//# sourceMappingURL=isObject.js.map