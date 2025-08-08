import { warning } from '../../../../lib/log/logger.js';
import { addRoute, hasRoute } from '../../../../lib/router/Router.js';
import { parseRoute } from '../../../../lib/router/scanForRoutes.js';
export function addAdminRoute(app, event) {
    try {
        const jsonPath = event.path.toString();
        const route = parseRoute(jsonPath, true, false);
        if (hasRoute(route === null || route === void 0 ? void 0 : route.id)) {
            warning(`Route ${route === null || route === void 0 ? void 0 : route.id} already exists. Skipping adding new route.`);
        }
        else {
            addRoute(route);
        }
    }
    catch (error) {
        warning(`Failed to add new route from ${event.path}: ${error.message}. Skipping.`);
    }
}
//# sourceMappingURL=addAdminRoute.js.map