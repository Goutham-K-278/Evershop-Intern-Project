import { warning } from '../../../../lib/log/logger.js';
import { justATouch } from './touch.js';
export function addComponent(app, event) {
    try {
        justATouch();
    }
    catch (error) {
        warning(`Failed to add component from ${event.path}: ${error.message}. Skipping.`);
    }
}
//# sourceMappingURL=addComponent.js.map