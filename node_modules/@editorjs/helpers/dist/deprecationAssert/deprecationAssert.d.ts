/**
 * Common method for printing a warning about the usage of deprecated property or method.
 * @param condition - condition of the deprecation status.
 * @param oldProperty - deprecated property.
 * @param newProperty - the property that should be used instead.
 */
export declare function deprecationAssert(condition: boolean, oldProperty: string, newProperty: string): void;
