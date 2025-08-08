import { hookable } from '../../../lib/util/hookable.js';
async function removeCartItem(cart, uuid) {
    const items = cart.getItems();
    const item = cart.getItem(uuid);
    const newItems = items.filter((i) => i.getData('uuid') !== uuid);
    if (item) {
        await cart.setData('items', newItems);
        return item;
    }
    else {
        throw new Error('Item not found');
    }
}
/** Removes an item from the cart by its UUID.
 * @param {Cart} cart - The cart object.
 * @param {string} uuid - The UUID of the item to remove.
 * @returns {Promise<Item>} - The removed item.
 * @throws {Error} - If the item is not found in the cart.
 */
export default async (cart, uuid, context) => {
    const removedItem = await hookable(removeCartItem, context)(cart, uuid);
    return removedItem;
};
//# sourceMappingURL=removeCartItem.js.map