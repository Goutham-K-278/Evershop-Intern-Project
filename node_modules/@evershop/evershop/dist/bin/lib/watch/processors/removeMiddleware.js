import { warning } from '../../../../lib/log/logger.js';
import { Handler } from '../../../../lib/middleware/Handler.js';
export function removeMiddleware(app, event) {
    var _a;
    try {
        const filePath = (_a = event.jsPath) === null || _a === void 0 ? void 0 : _a.toString();
        Handler.removeMiddlewares(filePath);
    }
    catch (error) {
        warning(`Failed to remove middleware from ${event.jsPath}: ${error.message}. Skipping.`);
    }
}
//# sourceMappingURL=removeMiddleware.js.map