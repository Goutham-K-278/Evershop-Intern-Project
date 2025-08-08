import { Application } from 'express';
import { EvershopRequest } from '../../../types/request.js';
export declare function getContextValue<T>(request: EvershopRequest, key: string, defaultValue: T, toString?: boolean): T;
/**
 * Pass the app instance if you want to set a application level value
 * (This value will be shared across all request)
 * Pass the request instance if you want to set a request level value
 */
export declare function setContextValue<T>(requestOrApp: EvershopRequest | Application, key: string, value: T): void;
export declare function getContext(request: EvershopRequest): Record<string, any>;
export declare function hasContextValue(request: EvershopRequest, key: string): boolean;
