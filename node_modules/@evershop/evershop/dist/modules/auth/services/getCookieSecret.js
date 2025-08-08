import { getConfig } from '../../../lib/util/getConfig.js';
export const getCookieSecret = () => getConfig('system.session.cookieSecret', 'keyboard cat');
//# sourceMappingURL=getCookieSecret.js.map