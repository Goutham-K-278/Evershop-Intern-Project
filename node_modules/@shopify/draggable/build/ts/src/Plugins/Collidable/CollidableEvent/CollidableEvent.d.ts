import AbstractEvent from '../../../shared/AbstractEvent';
import { DragEvent, DragEventData } from '../../../Draggable/DragEvent';
interface CollidableEventData {
    dragEvent: DragEvent<DragEventData>;
}
/**
 * Base collidable event
 * @class CollidableEvent
 * @module CollidableEvent
 * @extends AbstractEvent
 */
export declare class CollidableEvent<T extends CollidableEventData> extends AbstractEvent<CollidableEventData> {
    data: T;
    static type: string;
    /**
     * CollidableEvent constructor.
     * @constructs CollidableEvent
     * @param {CollidableEventData} data - Event data
     */
    constructor(data: T);
    /**
     * Drag event that triggered this colliable event
     * @property dragEvent
     * @type {DragEvent}
     * @readonly
     */
    get dragEvent(): DragEvent<DragEventData>;
}
interface CollidableInEventData extends CollidableEventData {
    collidingElement: HTMLElement;
}
/**
 * Collidable in event
 * @class CollidableInEvent
 * @module CollidableInEvent
 * @extends CollidableEvent
 */
export declare class CollidableInEvent extends CollidableEvent<CollidableInEventData> {
    static type: string;
    /**
     * Element you are currently colliding with
     * @property collidingElement
     * @type {HTMLElement}
     * @readonly
     */
    get collidingElement(): HTMLElement;
}
interface CollidableOutEventData extends CollidableEventData {
    collidingElement: HTMLElement;
}
/**
 * Collidable out event
 * @class CollidableOutEvent
 * @module CollidableOutEvent
 * @extends CollidableEvent
 */
export declare class CollidableOutEvent extends CollidableEvent<CollidableOutEventData> {
    static type: string;
    /**
     * Element you were previously colliding with
     * @property collidingElement
     * @type {HTMLElement}
     * @readonly
     */
    get collidingElement(): HTMLElement;
}
export {};
//# sourceMappingURL=CollidableEvent.d.ts.map