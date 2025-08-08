import { select } from '@evershop/postgres-query-builder';
import { emit } from '../../../../lib/event/emitter.js';
import { pool } from '../../../../lib/postgres/connection.js';
export default async (request, response, next) => {
    var _a;
    // Get the order data from $body
    const newOrder = ((_a = response.$body) === null || _a === void 0 ? void 0 : _a.data) || {};
    if (newOrder.payment_method !== 'cod') {
        return next();
    }
    else {
        const order = await select()
            .from('order')
            .where('order_id', '=', newOrder.order_id)
            .load(pool);
        await emit('order_placed', { ...order });
        return next();
    }
};
//# sourceMappingURL=%5BplaceOrder%5DaddOrderPlacedEvent.js.map