declare global {
    export interface Node {
        correspondingUseElement: SVGUseElement;
        correspondingElement: SVGElement;
    }
}
type CallbackFunction = (element: Node) => boolean;
type Value = string | CallbackFunction | NodeList | Node | Node[];
/**
 * Get the closest parent element node of a given node that matches the given
 * selector string or matching function
 *
 * @param {Node} node The child element to find a parent of
 * @param {String|Function} selector The string or function to use to match
 *     the parent node
 * @return {Node|null}
 */
export default function closest(node?: Node, value?: Value): Node | null;
export {};
//# sourceMappingURL=closest.d.ts.map