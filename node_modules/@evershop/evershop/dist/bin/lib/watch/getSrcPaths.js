import path from 'path';
import { getEnabledExtensions } from '../../../bin/extension/index.js';
import { CONSTANTS } from '../../../lib/helpers.js';
import { getEnabledTheme } from '../../../lib/util/getEnabledTheme.js';
export function getSrcPaths() {
    const extensions = getEnabledExtensions();
    const theme = getEnabledTheme();
    return extensions
        .filter((ext) => ext.srcPath)
        .map((ext) => ext.srcPath)
        .concat(path.resolve(CONSTANTS.ROOTPATH, 'packages/evershop/src/'))
        .concat((theme === null || theme === void 0 ? void 0 : theme.srcPath) ? theme.srcPath : []);
}
//# sourceMappingURL=getSrcPaths.js.map