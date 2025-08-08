export class ValidatorManager {
    constructor(initial = []) {
        this.validators = new Map();
        for (const v of initial) {
            this.add(v);
        }
    }
    add(validator) {
        this.validators.set(validator.id, validator);
    }
    async validate(input) {
        const results = await Promise.allSettled(Array.from(this.validators.values()).map(async (validator) => {
            try {
                const isValid = await validator.func(input);
                return isValid ? null : validator.errorMessage;
            }
            catch (err) {
                return `${validator.errorMessage} (exception occurred)`;
            }
        }));
        const errors = results
            .map((r) => r.status === 'fulfilled' ? r.value : 'Unknown validation error')
            .filter((msg) => !!msg);
        return {
            valid: errors.length === 0,
            errors
        };
    }
    validateSync(input) {
        const errors = [];
        for (const validator of this.validators.values()) {
            try {
                const isValid = validator.func(input);
                if (isValid instanceof Promise) {
                    throw new Error('Synchronous validation expected, but got async function');
                }
                if (!isValid) {
                    errors.push(validator.errorMessage);
                }
            }
            catch (err) {
                errors.push(err.message || 'Unknown validation error');
            }
        }
        return {
            valid: errors.length === 0,
            errors
        };
    }
    getAllIds() {
        return Array.from(this.validators.keys());
    }
    getValidator(id) {
        return this.validators.get(id);
    }
    remove(id) {
        this.validators.delete(id);
    }
    clear() {
        this.validators.clear();
    }
}
//# sourceMappingURL=validator.js.map