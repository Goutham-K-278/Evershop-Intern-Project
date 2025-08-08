import path from 'path';
/**
 * Deduplicates a list of paths, keeping only the top-most created folders.
 * @param {Array<{ path: string, type: string }>} entries
 * @returns {Event[]} Top-level unique root folders
 */
export function getRootPaths(entries) {
    var _a;
    const sortedPaths = entries
        .map((entry) => path.resolve(entry.path))
        .sort();
    const roots = [];
    for (const current of sortedPaths) {
        if (!roots.some((root) => current.startsWith(root.path + path.sep))) {
            roots.push({
                path: current,
                type: ((_a = entries.find((entry) => entry.path === current)) === null || _a === void 0 ? void 0 : _a.type) || 'create'
            });
        }
    }
    return roots;
}
//# sourceMappingURL=getRootPaths.js.map