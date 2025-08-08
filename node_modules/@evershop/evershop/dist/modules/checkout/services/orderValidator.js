import { addProcessor, getValueSync } from '../../../lib/util/registry.js';
import { ValidatorManager } from '../../../lib/util/validator.js';
const initialValidators = [
    {
        id: 'checkCartError',
        /**
         *
         * @param {Cart} cart
         * @returns {boolean}
         */
        func: (cart) => {
            if (cart.hasError()) {
                return false;
            }
            else {
                return true;
            }
        },
        errorMessage: 'Cart has errors'
    },
    {
        id: 'checkEmpty',
        /**
         *
         * @param {Cart} cart
         * @returns
         */
        func: (cart) => {
            const items = cart.getItems();
            if (items.length === 0) {
                return false;
            }
            else {
                return true;
            }
        },
        errorMessage: 'Cart is empty'
    },
    {
        id: 'shippingAddress',
        /**
         *
         * @param {Cart} cart
         * @returns {boolean}
         */
        func: (cart) => {
            if (!cart.getData('shipping_address_id')) {
                return false;
            }
            else {
                return true;
            }
        },
        errorMessage: 'Shipping address is required'
    },
    {
        id: 'shippingMethod',
        /**
         *
         * @param {Cart} cart
         * @returns {boolean}
         */
        func: (cart) => {
            if (!cart.getData('shipping_method')) {
                return false;
            }
            else {
                return true;
            }
        },
        errorMessage: 'Shipping method is required'
    }
];
export async function validateBeforeCreateOrder(cart) {
    const validator = getValueSync('orderValidator', () => new ValidatorManager(initialValidators), {}, (value) => value instanceof ValidatorManager);
    return await validator.validate(cart);
}
export function addOrderValidationRule(rule) {
    addProcessor('orderValidator', (validatorManager) => {
        if (validatorManager instanceof ValidatorManager) {
            validatorManager.add(rule);
            return validatorManager;
        }
        else {
            throw new Error('orderValidator must be an instance of ValidatorManager');
        }
    });
}
//# sourceMappingURL=orderValidator.js.map