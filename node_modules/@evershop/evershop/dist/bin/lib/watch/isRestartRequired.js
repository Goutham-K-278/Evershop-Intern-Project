import path from 'path';
import { CONSTANTS } from '../../../lib/helpers.js';
import { isSrc } from './isSrc.js';
export function isRestartRequired(event) {
    if (isSrc(event.path)) {
        return false;
    }
    else if (event.path === path.resolve(CONSTANTS.ROOTPATH, '.env')) {
        // If the .env file is changed, we need to restart the server
        return true;
    }
    else {
        const configPath = path.resolve(CONSTANTS.ROOTPATH, 'config');
        if (event.path.toString().startsWith(configPath) &&
            path.extname(event.path) === '.json') {
            // If a config JSON file is changed, we need to restart the server
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=isRestartRequired.js.map