import { Cart, Item } from './cart/Cart.js';
declare const _default: (cart: Cart, uuid: string, qty: string, action: "increase" | "decrease", context?: Record<string, unknown>) => Promise<Item>;
export default _default;
