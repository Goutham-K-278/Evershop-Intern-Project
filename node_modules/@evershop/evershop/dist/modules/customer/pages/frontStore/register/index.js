import { translate } from '../../../../../lib/locale/translate/translate.js';
import { buildUrl } from '../../../../../lib/router/buildUrl.js';
import { getContextValue, setContextValue } from '../../../../graphql/services/contextHelper.js';
export default (request, response, next) => {
    var _a;
    // Check if the user is logged in
    const customerTokenPayload = getContextValue(request, 'customerTokenPayload');
    if (customerTokenPayload && ((_a = customerTokenPayload.customer) === null || _a === void 0 ? void 0 : _a.customerId)) {
        // Redirect to admin dashboard
        response.redirect(buildUrl('homepage'));
    }
    else {
        setContextValue(request, 'pageInfo', {
            title: translate('Create an account'),
            description: translate('Create an account')
        });
        next();
    }
};
//# sourceMappingURL=index.js.map