import { dirname, join } from 'path';
import { warning } from '../../../../lib/log/logger.js';
import { addRoute } from '../../../../lib/router/Router.js';
import { parseRoute } from '../../../../lib/router/scanForRoutes.js';
export function updateAdminRoute(app, event) {
    try {
        const jsonPath = event.path.toString();
        const route = parseRoute(join(dirname(jsonPath), 'route.json'), true, false);
        addRoute(route);
    }
    catch (error) {
        warning(`Failed to update route from ${event.path}: ${error.message}`);
    }
}
//# sourceMappingURL=updateAdminRoute.js.map