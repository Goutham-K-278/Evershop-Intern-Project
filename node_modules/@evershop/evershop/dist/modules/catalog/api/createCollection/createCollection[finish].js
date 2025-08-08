import createCollection from '../../services/collection/createCollection.js';
export default async (request, response) => {
    const collection = await createCollection(request.body, {
        routeId: request.currentRoute.id
    });
    return collection;
};
//# sourceMappingURL=createCollection%5Bfinish%5D.js.map