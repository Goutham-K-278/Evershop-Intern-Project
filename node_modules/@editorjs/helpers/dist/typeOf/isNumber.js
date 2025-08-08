import { typeOf } from './typeOf';
/**
 * Checks if passed argument is number
 * @param v - variable to check
 * @returns true, if passed v is of type number, false otherwise
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isNumber(v) {
    return typeOf(v) === 'number';
}
//# sourceMappingURL=isNumber.js.map