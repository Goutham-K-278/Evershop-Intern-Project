/**
 * Checks node if it is empty
 * @description Method checks simple Node without any childs for emptiness
 * If you have Node with 2 or more children id depth, you better use {@link Dom#isEmpty} method
 * @param node - node to check
 * @param [ignoreChars] - char or substring to treat as empty
 * @returns true if it is empty
 */
export declare function isNodeEmpty(node: Node, ignoreChars?: string): boolean;
