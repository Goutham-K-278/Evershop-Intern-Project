import { CustomerData } from '../../../modules/customer/services/customer/createCustomer.js';
import { Cart } from './cart/Cart.js';
/**
 * Create a new cart for the customer
 * @param sid - The session ID
 * @param customer - The customer data
 * @returns The created cart
 */
export declare function createNewCart(sid: string, customer?: CustomerData): Promise<Cart>;
