import { isObject } from '../typeOf';
/**
 * Merge two objects recursively
 * @param target - target to be merged
 * @param sources - sources to be merged
 * @returns sourced merged with sources
 */
export function deepMerge(target, ...sources) {
    if (!sources.length) {
        return target;
    }
    const source = sources.shift();
    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (target[key] === undefined) {
                    Object.assign(target, { [key]: {} });
                }
                deepMerge(target[key], source[key]);
            }
            else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }
    return deepMerge(target, ...sources);
}
//# sourceMappingURL=deepMerge.js.map