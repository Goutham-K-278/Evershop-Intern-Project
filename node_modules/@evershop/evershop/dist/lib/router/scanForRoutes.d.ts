export function parseRoute(jsonPath: any, isAdmin?: boolean, isApi?: boolean): {
    id: string;
    name: any;
    method: any;
    path: any;
    isAdmin: boolean;
    isApi: boolean;
    folder: string;
    payloadSchema: any;
    access: any;
} | null;
/**
 * Scan for routes base on module path.
 */
export function scanForRoutes(path: any, isAdmin: any, isApi: any): {
    id: string;
    name: any;
    method: any;
    path: any;
    isAdmin: boolean;
    isApi: boolean;
    folder: string;
    payloadSchema: any;
    access: any;
}[];
