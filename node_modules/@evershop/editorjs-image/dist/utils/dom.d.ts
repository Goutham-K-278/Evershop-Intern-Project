/**
 * Helper for making Elements with attributes
 * @param tagName           - new Element tag name
 * @param classNames  - list or name of CSS class
 * @param attributes        - any attributes
 * @returns
 */
export declare function make(tagName: string, classNames?: string[] | string | null, attributes?: {
    [key: string]: string | boolean;
}): HTMLElement;
