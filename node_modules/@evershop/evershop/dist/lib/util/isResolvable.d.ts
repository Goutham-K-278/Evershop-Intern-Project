type AliasConfig = Record<string, string[]>;
/**
 * Checks whether a file exists for a given aliased path using the alias configuration.
 *
 * @param aliasedPath - The path starting with an alias (e.g., "@components/Button")
 * @param aliasConfig - The alias configuration mapping aliases to base paths
 * @returns true if the file exists or no alias matched; false if alias matched but file doesn't exist
 */
export declare function isResolvable(aliasedPath: string, aliasConfig: AliasConfig): boolean;
export {};
