import createCategory from '../../services/category/createCategory.js';
export default async (request, response) => {
    const result = await createCategory(request.body, {
        routeId: request.currentRoute.id
    });
    return result;
};
//# sourceMappingURL=createCategory%5Bfinish%5D.js.map