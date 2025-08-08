import { setContextValue } from '../../../../graphql/services/contextHelper.js';
export default (request, response) => {
    setContextValue(request, 'pageInfo', {
        title: 'Create a new widget',
        description: 'Create a new widget'
    });
};
//# sourceMappingURL=index.js.map