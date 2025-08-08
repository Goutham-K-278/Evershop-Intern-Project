/**
 * Register a frontStore route
 *
 * @param   {string}  id      Id of route, this must be unique
 * @param   {string|array} method  HTTP method, can be string like "GET", array like ["GET", "POST"]
 * @param   {string}  path    The path of route
 *
 */
export function registerFrontStoreRoute(id: string, method: string | any[], path: string, name: any, isApi?: boolean, folder?: string, payloadSchema?: null, access?: string): void;
