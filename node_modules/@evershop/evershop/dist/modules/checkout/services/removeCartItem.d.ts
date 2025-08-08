import { Cart, Item } from './cart/Cart.js';
/** Removes an item from the cart by its UUID.
 * @param {Cart} cart - The cart object.
 * @param {string} uuid - The UUID of the item to remove.
 * @returns {Promise<Item>} - The removed item.
 * @throws {Error} - If the item is not found in the cart.
 */
declare const _default: (cart: Cart, uuid: string, context: Record<string, unknown>) => Promise<Item>;
export default _default;
