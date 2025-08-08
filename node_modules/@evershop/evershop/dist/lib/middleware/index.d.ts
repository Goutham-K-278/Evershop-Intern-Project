export function getAdminMiddlewares(routeId: any): any[];
export function getFrontMiddlewares(routeId: any): any[];
/**
 * This function scan and load all middleware function of a module base on module path
 *
 * @param   {string}  path  The path of the module
 *
 */
export function getModuleMiddlewares(path: string): void;
/**
 * This function return a list of sorted middleware functions (all)
 *
 * @return  {array}  List of sorted middleware functions
 */
export function getAllSortedMiddlewares(): any[];
