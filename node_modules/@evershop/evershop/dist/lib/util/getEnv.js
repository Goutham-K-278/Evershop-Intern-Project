/**
 * Get environment variable value
 *
 * @param name - Environment variable name
 * @param defaultValue - Default value if environment variable is not set
 * @returns The environment variable value or default value
 */
export function getEnv(name, defaultValue) {
    const value = process.env[name];
    return value !== undefined ? value : defaultValue;
}
//# sourceMappingURL=getEnv.js.map