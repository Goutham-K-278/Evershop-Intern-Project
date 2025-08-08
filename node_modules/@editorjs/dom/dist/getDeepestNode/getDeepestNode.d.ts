/**
 * Search for deepest node which is Leaf.
 * Leaf is the vertex that doesn't have any child nodes
 * @description Method recursively goes throw the all Node until it finds the Leaf
 * @param node - root Node. From this vertex we start Deep-first search
 *                      {@link https://en.wikipedia.org/wiki/Depth-first_search}
 * @param [atLast] - find last text node
 * @returns - it can be text Node or Element Node, so that caret will able to work with it
 *            Can return null if node is Document or DocumentFragment, or node is not attached to the DOM
 */
export declare function getDeepestNode(node: Node, atLast?: boolean): Node | null;
