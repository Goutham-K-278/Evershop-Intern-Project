import AbstractEvent from '../../shared/AbstractEvent';
type CallbackFunction = (event: AbstractEvent<unknown>) => void;
interface Callback {
    [key: string]: CallbackFunction[];
}
/**
 * The Emitter is a simple emitter class that provides you with `on()`, `off()` and `trigger()` methods
 * @class Emitter
 * @module Emitter
 */
export default class Emitter {
    callbacks: Callback;
    /**
     * Registers callbacks by event name
     * @param {String} type
     * @param {...Function} callbacks
     */
    on(type: string, ...callbacks: CallbackFunction[]): this;
    /**
     * Unregisters callbacks by event name
     * @param {String} type
     * @param {Function} callback
     */
    off(type: string, callback: CallbackFunction): this | null;
    /**
     * Triggers event callbacks by event object
     * @param {AbstractEvent} event
     */
    trigger(event: AbstractEvent<unknown>): this | null;
}
export {};
//# sourceMappingURL=Emitter.d.ts.map