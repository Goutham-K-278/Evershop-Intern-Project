/**
 * breadth-first search (BFS)
 * {@link https://en.wikipedia.org/wiki/Breadth-first_search}
 * @description Pushes to stack all DOM leafs and checks for emptiness
 * @param node - node to check
 * @param [ignoreChars] - char or substring to treat as empty
 * @returns true if node is empty (considering ignore chars), false otherwise
 */
export declare function isEmpty(node: Node, ignoreChars?: string): boolean;
