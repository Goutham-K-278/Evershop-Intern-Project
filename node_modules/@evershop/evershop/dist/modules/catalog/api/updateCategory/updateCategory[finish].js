import updateCategory from '../../services/category/updateCategory.js';
export default async (request, response) => {
    const category = await updateCategory(request.params.id, request.body, {
        routeId: request.currentRoute.id
    });
    return category;
};
//# sourceMappingURL=updateCategory%5Bfinish%5D.js.map