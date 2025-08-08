export class Handler {
    static addMiddleware(middleware: any): void;
    static getMiddlewares(): any;
    static getMiddleware(id: any): any;
    static getMiddlewareByRoute(route: any): any;
    static getAppLevelMiddlewares(region: any): any[];
    static removeMiddleware(path: any): void;
    static removeMiddlewares(basePath: any): void;
    static addMiddlewareFromPath(path: any): void;
    static middleware(): (request: any, response: any, next: any) => void;
    constructor(routeId: any);
    routeId: any;
}
export namespace Handler {
    let middlewares: any;
    let sortedMiddlewarePerRoute: {};
}
