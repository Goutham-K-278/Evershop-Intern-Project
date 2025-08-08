import AbstractEvent from '../../shared/AbstractEvent';
import { DragEvent, DragEventData, DragOverEvent, DragOutEvent, DragOverContainerEvent, DragOutContainerEvent } from '../../Draggable/DragEvent';
interface SortableEventData {
    dragEvent: DragEvent<DragEventData>;
}
/**
 * Base sortable event
 * @class SortableEvent
 * @module SortableEvent
 * @extends AbstractEvent
 */
export declare class SortableEvent<T extends SortableEventData> extends AbstractEvent<SortableEventData> {
    data: T;
    static type: string;
    /**
     * SortableEvent constructor.
     * @constructs SortableEvent
     * @param {SortableEventData} data - Event data
     */
    constructor(data: T);
    /**
     * Original drag event that triggered this sortable event
     * @property dragEvent
     * @type {DragEvent}
     * @readonly
     */
    get dragEvent(): DragEvent<DragEventData>;
}
interface SortableStartEventData extends SortableEventData {
    startIndex: number;
    startContainer: HTMLElement;
}
/**
 * Sortable start event
 * @class SortableStartEvent
 * @module SortableStartEvent
 * @extends SortableEvent
 */
export declare class SortableStartEvent extends SortableEvent<SortableStartEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * Start index of source on sortable start
     * @property startIndex
     * @type {Number}
     * @readonly
     */
    get startIndex(): number;
    /**
     * Start container on sortable start
     * @property startContainer
     * @type {HTMLElement}
     * @readonly
     */
    get startContainer(): HTMLElement;
}
interface SortableSortEventData extends SortableEventData {
    dragEvent: DragOverEvent | DragOutEvent | DragOverContainerEvent | DragOutContainerEvent;
    currentIndex: number;
    over: HTMLElement;
}
/**
 * Sortable sort event
 * @class SortableSortEvent
 * @module SortableSortEvent
 * @extends SortableEvent
 */
export declare class SortableSortEvent extends SortableEvent<SortableSortEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * Index of current draggable element
     * @property currentIndex
     * @type {Number}
     * @readonly
     */
    get currentIndex(): number;
    /**
     * Draggable element you are hovering over
     * @property over
     * @type {HTMLElement}
     * @readonly
     */
    get over(): HTMLElement;
    /**
     * Draggable container element you are hovering over
     * @property overContainer
     * @type {HTMLElement}
     * @readonly
     */
    get overContainer(): HTMLElement;
}
interface SortableSortedEventData extends SortableEventData {
    oldIndex: number;
    newIndex: number;
    oldContainer: HTMLElement;
    newContainer: HTMLElement;
}
/**
 * Sortable sorted event
 * @class SortableSortedEvent
 * @module SortableSortedEvent
 * @extends SortableEvent
 */
export declare class SortableSortedEvent extends SortableEvent<SortableSortedEventData> {
    static type: string;
    /**
     * Index of last sorted event
     * @property oldIndex
     * @type {Number}
     * @readonly
     */
    get oldIndex(): number;
    /**
     * New index of this sorted event
     * @property newIndex
     * @type {Number}
     * @readonly
     */
    get newIndex(): number;
    /**
     * Old container of draggable element
     * @property oldContainer
     * @type {HTMLElement}
     * @readonly
     */
    get oldContainer(): HTMLElement;
    /**
     * New container of draggable element
     * @property newContainer
     * @type {HTMLElement}
     * @readonly
     */
    get newContainer(): HTMLElement;
}
interface SortableStopEventData extends SortableEventData {
    oldIndex: number;
    newIndex: number;
    oldContainer: HTMLElement;
    newContainer: HTMLElement;
}
/**
 * Sortable stop event
 * @class SortableStopEvent
 * @module SortableStopEvent
 * @extends SortableEvent
 */
export declare class SortableStopEvent extends SortableEvent<SortableStopEventData> {
    static type: string;
    /**
     * Original index on sortable start
     * @property oldIndex
     * @type {Number}
     * @readonly
     */
    get oldIndex(): number;
    /**
     * New index of draggable element
     * @property newIndex
     * @type {Number}
     * @readonly
     */
    get newIndex(): number;
    /**
     * Original container of draggable element
     * @property oldContainer
     * @type {HTMLElement}
     * @readonly
     */
    get oldContainer(): HTMLElement;
    /**
     * New container of draggable element
     * @property newContainer
     * @type {HTMLElement}
     * @readonly
     */
    get newContainer(): HTMLElement;
}
export {};
//# sourceMappingURL=SortableEvent.d.ts.map