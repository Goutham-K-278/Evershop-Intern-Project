import { existsSync } from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
/**
 * Loads and runs the bootstrap script from a module directory.
 */
export const loadBootstrapScript = async function loadBootstrapScript(module, context = {}) {
    const filePath = path.resolve(module.path, 'bootstrap.js');
    if (!existsSync(filePath)) {
        return;
    }
    // Convert path to a URL
    const bootstrapPath = pathToFileURL(filePath).toString();
    const bootstrap = (await import(bootstrapPath));
    if (typeof bootstrap.default !== 'function') {
        throw new Error('Bootstrap script must provide a default export as a function');
    }
    await bootstrap.default(context);
};
//# sourceMappingURL=bootstrap.js.map