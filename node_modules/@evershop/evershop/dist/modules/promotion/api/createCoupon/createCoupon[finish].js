import createCoupon from '../../services/coupon/createCoupon.js';
export default async (request, response) => {
    const coupon = await createCoupon(request.body, {
        routeId: request.currentRoute.id
    });
    return coupon;
};
//# sourceMappingURL=createCoupon%5Bfinish%5D.js.map