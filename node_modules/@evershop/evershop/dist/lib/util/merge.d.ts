/**
 * This function take 2 objects: target and source, and merge them together recursively
 * This function will not merge built-in objects like Date, RegExp, Map, Set
 * This function will overwrite the value from the first object by the value from the second object if they have the same key and the value is primitive
 * This function will merge array property from 2 objects
 *
 * @param   {object}  target  The target object
 * @param   {object}  source  The source object
 *
 * @return  {object}  The new target object
 */
export function merge(target: object, source: object, maxDepth?: number, currentDepth?: number): object;
