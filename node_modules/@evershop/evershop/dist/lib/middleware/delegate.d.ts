import { EvershopRequest } from '../../types/request.js';
/**
 * Retrieves the delegate manager for the given request.
 * @param request The request object containing the delegate manager.
 * @template T The type of the delegate.
 * @returns The delegate manager.
 */
export declare function getDelegateManager(request: EvershopRequest): {
    /**
     * Set a value once. Throws if the key already exists.
     */
    setOnce(key: string, value: any): void;
    /**
     * Get a **cloned copy** of the value. This ensures that the original value
     * cannot be modified outside of this map.
     */
    get(key: string): any;
    has(key: string): boolean;
    keys(): string[];
    getAll(): Record<string, any>;
};
/**
 * Checks if a delegate exists for the given ID in the request.
 * @param id The delegate ID to check.
 * @template T The type of the delegate.
 * @param request The request object.
 * @returns True if the delegate exists, false otherwise.
 */
export declare function hasDelegate(id: string, request: EvershopRequest): boolean;
/**
 * Retrieves a delegate value for the given ID.
 * @param id The delegate ID to retrieve.
 * @template T The type of the delegate.
 * @param request The request object.
 * @returns The delegate value or undefined if not found.
 */
export declare function getDelegate<T>(id: string, request: EvershopRequest): T | undefined;
export declare function getDelegates(request: EvershopRequest): Record<string, any>;
/**
 * Sets a delegate for the given request object.
 * @param id The delegate ID.
 * @param value The delegate value.
 * @param request The request object.
 */
export declare function setDelegate<T>(id: string, value: T, request: EvershopRequest): void;
