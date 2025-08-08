import { typeOf } from './typeOf';
/**
 * Checks if passed argument is boolean
 * @param v - variable to check
 * @returns true, if passed v is of type boolean, false otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isBoolean(v) {
    return typeOf(v) === 'boolean';
}
//# sourceMappingURL=isBoolean.js.map