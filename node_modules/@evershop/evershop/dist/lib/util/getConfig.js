import config from 'config';
/**
 * Get the configuration value base on path. Return the default value if the path is not found.
 */
export function getConfig(path, defaultValue) {
    return config.has(path) ? config.get(path) : defaultValue;
}
//# sourceMappingURL=getConfig.js.map