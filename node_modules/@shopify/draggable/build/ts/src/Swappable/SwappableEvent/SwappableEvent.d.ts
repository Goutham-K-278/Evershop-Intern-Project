import AbstractEvent from '../../shared/AbstractEvent';
import { DragEvent, DragEventData } from '../../Draggable/DragEvent';
interface SwappableEventData {
    dragEvent: DragEvent<DragEventData>;
}
/**
 * Base swappable event
 * @class SwappableEvent
 * @module SwappableEvent
 * @extends AbstractEvent
 */
export declare class SwappableEvent<T extends SwappableEventData> extends AbstractEvent<SwappableEventData> {
    data: T;
    static type: string;
    /**
     * SwappableEvent constructor.
     * @constructs SwappableEvent
     * @param {SwappableEventData} data - Event data
     */
    constructor(data: T);
    /**
     * Original drag event that triggered this swappable event
     * @property dragEvent
     * @type {DragEvent}
     * @readonly
     */
    get dragEvent(): DragEvent<DragEventData>;
}
/**
 * Swappable start event
 * @class SwappableStartEvent
 * @module SwappableStartEvent
 * @extends SwappableEvent
 */
export declare class SwappableStartEvent extends SwappableEvent<SwappableEventData> {
    static type: string;
    static cancelable: boolean;
}
interface SwappableSwapEventData extends SwappableEventData {
    over: HTMLElement;
    overContainer: HTMLElement;
}
/**
 * Swappable swap event
 * @class SwappableSwapEvent
 * @module SwappableSwapEvent
 * @extends SwappableEvent
 */
export declare class SwappableSwapEvent extends SwappableEvent<SwappableSwapEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * Draggable element you are over
     * @property over
     * @type {HTMLElement}
     * @readonly
     */
    get over(): HTMLElement;
    /**
     * Draggable container you are over
     * @property overContainer
     * @type {HTMLElement}
     * @readonly
     */
    get overContainer(): HTMLElement;
}
interface SwappableSwappedEventData extends SwappableEventData {
    swappedElement: HTMLElement;
}
/**
 * Swappable swapped event
 * @class SwappableSwappedEvent
 * @module SwappableSwappedEvent
 * @extends SwappableEvent
 */
export declare class SwappableSwappedEvent extends SwappableEvent<SwappableSwappedEventData> {
    static type: string;
    /**
     * The draggable element that you swapped with
     * @property swappedElement
     * @type {HTMLElement}
     * @readonly
     */
    get swappedElement(): HTMLElement;
}
/**
 * Swappable stop event
 * @class SwappableStopEvent
 * @module SwappableStopEvent
 * @extends SwappableEvent
 */
export declare class SwappableStopEvent extends SwappableEvent<SwappableEventData> {
    static type: string;
}
export {};
//# sourceMappingURL=SwappableEvent.d.ts.map