import { isObject } from '../typeOf';
/**
 * Compares two values with unknown type
 * @param var1 - value to compare
 * @param var2 - value to compare with
 * @returns true if they are equal
 */
export function equals(var1, var2) {
    const isVar1NonPrimitive = Array.isArray(var1) || isObject(var1);
    const isVar2NonPrimitive = Array.isArray(var2) || isObject(var2);
    if (isVar1NonPrimitive || isVar2NonPrimitive) {
        return JSON.stringify(var1) === JSON.stringify(var2);
    }
    return var1 === var2;
}
//# sourceMappingURL=equals.js.map