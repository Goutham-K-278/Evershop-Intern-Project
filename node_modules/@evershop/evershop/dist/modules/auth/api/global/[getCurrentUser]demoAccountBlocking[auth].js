import { getEnv } from '../../../../lib/util/getEnv.js';
import { UNAUTHORIZED } from '../../../../lib/util/httpStatus.js';
export default (request, response, next) => {
    const { currentRoute } = request;
    if (request.method === 'GET' ||
        (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.id) === 'adminGraphql' ||
        (currentRoute === null || currentRoute === void 0 ? void 0 : currentRoute.access) === 'public') {
        next();
    }
    else {
        const user = request.getCurrentUser();
        const currentUserEmail = user === null || user === void 0 ? void 0 : user.email;
        const demoUserEmails = getEnv('DEMO_USER_EMAILS', '').split(',');
        if (demoUserEmails && demoUserEmails.includes(currentUserEmail)) {
            response.status(UNAUTHORIZED).json({
                error: {
                    status: UNAUTHORIZED,
                    message: 'The demo account is not allowed to make changes'
                }
            });
        }
        else {
            next();
        }
    }
};
//# sourceMappingURL=%5BgetCurrentUser%5DdemoAccountBlocking%5Bauth%5D.js.map