import { Cart, Item } from './cart/Cart.js';
/**
 * Add item to cart service. This service will add an item to the cart.
 * @param {Cart} cart - The cart object to which the item will be added
 * @param {number} productID - The SKU of the product to be added
 * @param {number|string} qty - The quantity of the product to be added
 * @param {Record<string, unknown>} context - The context object containing additional data
 * @returns {Promise<Item>} The item that was added to the cart
 * @throws {Error} If the context is not an object or if there is an error
 */
declare const _default: (cart: Cart, productID: number, qty: number | string, context: Record<string, unknown>) => Promise<Item>;
export default _default;
