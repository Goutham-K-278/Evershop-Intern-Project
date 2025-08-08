/**
 * True if passed variable is not null/undefined/''/{}
 * @param v value to check
 */
export function notEmpty(v) {
    return v !== undefined && v !== null && v !== '' && (typeof v !== 'object' || Object.keys(v).length > 0);
}
//# sourceMappingURL=notEmpty.js.map