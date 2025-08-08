import createProduct from '../../services/product/createProduct.js';
export default async (request, response) => {
    const result = await createProduct(request.body, {
        routeId: request.currentRoute.id
    });
    return result;
};
//# sourceMappingURL=createProduct%5Bfinish%5D.js.map