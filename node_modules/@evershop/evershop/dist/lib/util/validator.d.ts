export type Validator<T> = {
    id: string;
    func: (input: T) => boolean | Promise<boolean>;
    errorMessage: string;
};
export declare class ValidatorManager<T> {
    private validators;
    constructor(initial?: Validator<T>[]);
    add(validator: Validator<T>): void;
    validate(input: T): Promise<{
        valid: boolean;
        errors: string[];
    }>;
    validateSync(input: T): {
        valid: boolean;
        errors: string[];
    };
    getAllIds(): string[];
    getValidator(id: string): Validator<T> | undefined;
    remove(id: string): void;
    clear(): void;
}
