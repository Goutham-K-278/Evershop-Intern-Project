import { warning } from '../../../../lib/log/logger.js';
import { Handler } from '../../../../lib/middleware/Handler.js';
export function addMiddleware(app, event) {
    var _a;
    try {
        const filePath = (_a = event.jsPath) === null || _a === void 0 ? void 0 : _a.toString();
        Handler.addMiddlewareFromPath(filePath);
    }
    catch (error) {
        warning(`Failed to add new middleware from ${event.jsPath}: ${error.message}. Skipping.`);
    }
}
//# sourceMappingURL=addMiddleware.js.map