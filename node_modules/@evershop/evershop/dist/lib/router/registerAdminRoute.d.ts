/**
 * Register an admin route
 *
 * @param   {string}  id      Id of route, this must be unique
 * @param   {string|array} method  HTTP method, can be string like "GET", array like ["GET", "POST"]
 * @param   {string}  path    The path of route
 *
 */
export function registerAdminRoute(id: string, method: string | any[], path: string, name: any, isApi?: boolean, folder?: string): void;
