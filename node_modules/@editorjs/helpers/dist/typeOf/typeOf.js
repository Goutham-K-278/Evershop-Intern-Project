/**
 * Return string representation of the object type
 * @param object - object to get type
 * @returns string type name of the passed object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function typeOf(object) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,  @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return Object.prototype.toString.call(object).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}
//# sourceMappingURL=typeOf.js.map