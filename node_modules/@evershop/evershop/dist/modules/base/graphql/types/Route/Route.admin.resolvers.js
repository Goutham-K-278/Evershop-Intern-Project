import { getRoutes } from '../../../../../lib/router/Router.js';
export default {
    Query: {
        routes: () => {
            const routes = getRoutes();
            return routes.filter((route) => route.name);
        }
    }
};
//# sourceMappingURL=Route.admin.resolvers.js.map