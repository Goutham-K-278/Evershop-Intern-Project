/**
 * Cancels an order by its UUID and adds a cancellation reason.
 * @param uuid - The UUID of the order to cancel.
 * @param reason - The reason for cancellation.
 * @returns A promise that resolves when the order is canceled.
 */
declare const _default: (uuid: string, reason: string | undefined) => Promise<void>;
export default _default;
