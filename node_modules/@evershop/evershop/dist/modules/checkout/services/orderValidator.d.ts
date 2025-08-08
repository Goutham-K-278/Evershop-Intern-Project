import { Validator } from '../../../lib/util/validator.js';
import { Cart } from './cart/Cart.js';
export declare function validateBeforeCreateOrder(cart: Cart): Promise<{
    valid: boolean;
    errors: string[];
}>;
export declare function addOrderValidationRule(rule: Validator<Cart>): void;
