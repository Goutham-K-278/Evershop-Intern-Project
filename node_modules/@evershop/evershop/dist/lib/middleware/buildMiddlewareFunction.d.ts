/**
 * This function takes the defined middleware function and return a new one with wrapper
 *
 * @param {string} id
 * @param {function} middleware: The middleware function
 * @param {string} routeId: The route Id
 * @param {string} before: The middleware function that executes after this one
 * @param {string} after: The middleware function that executes before this one
 * @returns {object} the middleware object
 * @throws
 */
export function buildMiddlewareFunction(id: string, path: any): object;
