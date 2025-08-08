import { Cart } from './cart/Cart.js';
/**
 * This function return a Cart object by the session ID.
 * @param {string} sid - The session ID
 * @returns {Promise<Cart | null>} - The Cart object if found, otherwise null
 * @throws {Error} If there is an error during the query
 * @description This function retrieves the current cart associated with a session ID.
 */
export declare const getCurrentCart: (sid: string) => Promise<Cart | null>;
