import AbstractEvent from '../../shared/AbstractEvent';
import { DragEvent, DragEventData } from '../../Draggable/DragEvent';
interface DroppableEventData {
    dragEvent: DragEvent<DragEventData>;
}
/**
 * Base droppable event
 * @class DroppableEvent
 * @module DroppableEvent
 * @extends AbstractEvent
 */
export declare class DroppableEvent<T extends DroppableEventData> extends AbstractEvent<DroppableEventData> {
    data: T;
    static type: string;
    /**
     * DroppableEvent constructor.
     * @constructs DroppableEvent
     * @param {DroppableEventData} data - Event data
     */
    constructor(data: T);
    /**
     * Original drag event that triggered this droppable event
     * @property dragEvent
     * @type {DragEvent}
     * @readonly
     */
    get dragEvent(): DragEvent<DragEventData>;
}
interface DroppableStartEventData extends DroppableEventData {
    dropzone: HTMLElement;
}
/**
 * Droppable start event
 * @class DroppableStartEvent
 * @module DroppableStartEvent
 * @extends DroppableEvent
 */
export declare class DroppableStartEvent extends DroppableEvent<DroppableStartEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * The initial dropzone element of the currently dragging draggable element
     * @property dropzone
     * @type {HTMLElement}
     * @readonly
     */
    get dropzone(): HTMLElement;
}
interface DroppableDroppedEventData extends DroppableEventData {
    dropzone: HTMLElement;
}
/**
 * Droppable dropped event
 * @class DroppableDroppedEvent
 * @module DroppableDroppedEvent
 * @extends DroppableEvent
 */
export declare class DroppableDroppedEvent extends DroppableEvent<DroppableDroppedEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * The dropzone element you dropped the draggable element into
     * @property dropzone
     * @type {HTMLElement}
     * @readonly
     */
    get dropzone(): HTMLElement;
}
interface DroppableReturnedEventData extends DroppableEventData {
    dropzone: HTMLElement;
}
/**
 * Droppable returned event
 * @class DroppableReturnedEvent
 * @module DroppableReturnedEvent
 * @extends DroppableEvent
 */
export declare class DroppableReturnedEvent extends DroppableEvent<DroppableReturnedEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * The dropzone element you dragged away from
     * @property dropzone
     * @type {HTMLElement}
     * @readonly
     */
    get dropzone(): HTMLElement;
}
interface DroppableStopEventData extends DroppableEventData {
    dropzone: HTMLElement;
}
/**
 * Droppable stop event
 * @class DroppableStopEvent
 * @module DroppableStopEvent
 * @extends DroppableEvent
 */
export declare class DroppableStopEvent extends DroppableEvent<DroppableStopEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * The final dropzone element of the draggable element
     * @property dropzone
     * @type {HTMLElement}
     * @readonly
     */
    get dropzone(): HTMLElement;
}
export {};
//# sourceMappingURL=DroppableEvent.d.ts.map