/**
 * This function take a route ID, list of params and return the absolute url
 *
 * @param   {string}  routeId
 * @param   {object}  params   Key-Pair value of route params
 *
 * @return  {string} The Url
 */
export declare const buildAbsoluteUrl: (routeId: string, params?: Record<string, any>) => string;
