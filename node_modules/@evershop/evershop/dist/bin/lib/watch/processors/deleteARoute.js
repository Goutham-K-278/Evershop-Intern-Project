import { basename, dirname } from 'path';
import { warning } from '../../../../lib/log/logger.js';
import { deleteRoute, hasRoute } from '../../../../lib/router/Router.js';
export function deleteARoute(app, event) {
    try {
        const jsonPath = event.path.toString();
        const routeId = jsonPath.includes('route.json')
            ? basename(dirname(jsonPath))
            : basename(jsonPath);
        if (hasRoute(routeId)) {
            deleteRoute(routeId);
        }
    }
    catch (error) {
        warning(`Failed to delete route from ${event.path}: ${error.message}. Skipping.`);
    }
}
//# sourceMappingURL=deleteARoute.js.map