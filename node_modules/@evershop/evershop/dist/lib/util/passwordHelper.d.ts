import { Validator } from './validator.js';
export declare function hashPassword(password: string): string;
export declare function comparePassword(password: string, hash: string): boolean;
export declare function verifyPassword(password: string): boolean;
export declare function addPasswordValidationRule(rule: Validator<string>): void;
