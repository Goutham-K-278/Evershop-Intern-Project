export class Cart extends DataObject {
    constructor(initialData?: {});
    getId(): any;
    /**
     * @returns {Array<Item>}
     */
    getItems(): Array<Item>;
    /**
     * @param {string||int} productID
     * @param {int} qty
     * @param {object} context
     * @returns {Item}
     * @throws {Error}
     */
    addItem(productID: any, qty: int, context: object): Item;
    /**
     * @param {string} uuid
     * @returns {Item}
     * @throws {Error}
     */
    removeItem(uuid: string, context: any): Item;
    /**
     * @param {string} sku
     * @returns {Item}
     * @throws {Error}
     */
    removeItemBySku(sku: string, context: any): Item;
    updateItemQty(uuid: any, qty: any, action: any, context: any): Promise<Item>;
    updateItemQtyBySku(sku: any, qty: any, action: any, context: any): Promise<Item>;
    createItem(productId: any, qty: any): Promise<Item>;
    getItem(uuid: any): Item | undefined;
    hasItemError(): boolean;
    exportData(): {
        errors: {};
    };
}
export class Item extends DataObject {
    getProduct(): Promise<any>;
    getId(): any;
    getCart(): any;
    #private;
}
export function createNewCart(initialData: any): Promise<Cart>;
export function getCart(uuid: any): Promise<Cart>;
import { DataObject } from '../../../../modules/checkout/services/cart/DataObject.js';
