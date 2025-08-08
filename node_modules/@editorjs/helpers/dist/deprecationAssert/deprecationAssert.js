/**
 * Common method for printing a warning about the usage of deprecated property or method.
 * @param condition - condition of the deprecation status.
 * @param oldProperty - deprecated property.
 * @param newProperty - the property that should be used instead.
 */
export function deprecationAssert(condition, oldProperty, newProperty) {
    const message = `«${oldProperty}» is deprecated and will be removed in the next major release. Please use the «${newProperty}» instead.`;
    if (condition) {
        console.warn(message);
    }
}
//# sourceMappingURL=deprecationAssert.js.map