import bcrypt from 'bcryptjs';
import { addProcessor, getValueSync } from './registry.js';
import { ValidatorManager } from './validator.js';
export function hashPassword(password) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}
export function comparePassword(password, hash) {
    return bcrypt.compareSync(password, hash);
}
export function verifyPassword(password) {
    const validator = getValueSync('passwordValidator', () => new ValidatorManager([
        {
            id: 'passwordLength',
            func: (password) => password.length >= 6,
            errorMessage: 'Password must be at least 6 characters'
        }
    ]), {}, (value) => value instanceof ValidatorManager);
    const { valid, errors } = validator.validateSync(password);
    if (!valid) {
        throw new Error(`${errors.join('\n\r')}`);
    }
    return true;
}
export function addPasswordValidationRule(rule) {
    addProcessor('passwordValidator', (validatorManager) => {
        if (validatorManager instanceof ValidatorManager) {
            validatorManager.add(rule);
            return validatorManager;
        }
        else {
            throw new Error('passwordValidator must be an instance of ValidatorManager');
        }
    });
}
//# sourceMappingURL=passwordHelper.js.map