/**
 * Calculates the Y coordinate of the text baseline from the top of the element's margin box,
 *
 * The calculation formula is as follows:
 *
 * 1. Calculate the baseline offset:
 * - Typically, the baseline is about 80% of the `fontSize` from the top of the text, as this is a common average for many fonts.
 *
 * 2. Calculate the additional space due to `lineHeight`:
 * - If the `lineHeight` is greater than the `fontSize`, the extra space is evenly distributed above and below the text. This extra space is `(lineHeight - fontSize) / 2`.
 *
 * 3. Calculate the total baseline Y coordinate:
 * - Sum of `marginTop`, `borderTopWidth`, `paddingTop`, the extra space due to `lineHeight`, and the baseline offset.
 * @param element - The element which baseline would be calculated
 * @returns - The Y coordinate of the text baseline from the top of the element's margin box.
 */
export declare function calculateBaseline(element: Element): number;
