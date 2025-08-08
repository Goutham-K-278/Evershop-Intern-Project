/**
 * All events fired by draggable inherit this class. You can call `cancel()` to
 * cancel a specific event or you can check if an event has been canceled by
 * calling `canceled()`.
 * @abstract
 * @class AbstractEvent
 * @module AbstractEvent
 */
export declare class AbstractEvent<T> {
    data: T;
    /**
     * Event type
     * @static
     * @abstract
     * @property type
     * @type {String}
     */
    static type: string;
    /**
     * Event cancelable
     * @static
     * @abstract
     * @property cancelable
     * @type {Boolean}
     */
    static cancelable: boolean;
    /**
     * Private instance variable to track canceled state
     * @private
     * @type {Boolean}
     */
    private _canceled;
    /**
     * AbstractEvent constructor.
     * @constructs AbstractEvent
     * @param {T} data - Event data
     */
    constructor(data: T);
    /**
     * Read-only type
     * @abstract
     * @return {String}
     */
    get type(): string;
    /**
     * Read-only cancelable
     * @abstract
     * @return {Boolean}
     */
    get cancelable(): boolean;
    /**
     * Cancels the event instance
     * @abstract
     */
    cancel(): void;
    /**
     * Check if event has been canceled
     * @abstract
     * @return {Boolean}
     */
    canceled(): boolean;
    /**
     * Returns new event instance with existing event data.
     * This method allows for overriding of event data.
     * @param {T} data
     * @return {AbstractEvent}
     */
    clone(data: Partial<T>): AbstractEvent<T>;
}
//# sourceMappingURL=AbstractEvent.d.ts.map