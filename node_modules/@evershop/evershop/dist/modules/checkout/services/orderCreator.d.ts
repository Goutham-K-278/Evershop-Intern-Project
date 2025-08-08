import { Cart } from './cart/Cart.js';
/**
 * Create a new order from the cart
 * @param cart
 * @returns {Promise<Object>} - The created order object
 * @throws {Error} - If the order creation fails due to validation errors or database issues
 */
export declare const createOrder: (cart: Cart) => Promise<any>;
