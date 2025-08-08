import AbstractEvent from '../../shared/AbstractEvent';
import { SensorEvent } from '../Sensors/SensorEvent';
/**
 * DragEventData
 * @interface DragEventData
 */
export interface DragEventData {
    source: HTMLElement;
    originalSource: HTMLElement;
    mirror: HTMLElement;
    sourceContainer: HTMLElement;
    sensorEvent: SensorEvent;
}
/**
 * Base drag event
 * @class DragEvent
 * @module DragEvent
 * @extends AbstractEvent
 */
export declare class DragEvent<T extends DragEventData> extends AbstractEvent<DragEventData> {
    data: T;
    static type: string;
    /**
     * DragEvent constructor.
     * @constructs DragEvent
     * @param {DragEventData} data - Event data
     */
    constructor(data: T);
    /**
     * Draggables source element
     * @property source
     * @type {HTMLElement}
     * @readonly
     */
    get source(): HTMLElement;
    /**
     * Draggables original source element
     * @property originalSource
     * @type {HTMLElement}
     * @readonly
     */
    get originalSource(): HTMLElement;
    /**
     * Draggables mirror element
     * @property mirror
     * @type {HTMLElement}
     * @readonly
     */
    get mirror(): HTMLElement;
    /**
     * Draggables source container element
     * @property sourceContainer
     * @type {HTMLElement}
     * @readonly
     */
    get sourceContainer(): HTMLElement;
    /**
     * Sensor event
     * @property sensorEvent
     * @type {SensorEvent}
     * @readonly
     */
    get sensorEvent(): SensorEvent;
    /**
     * Original event that triggered sensor event
     * @property originalEvent
     * @type {Event}
     * @readonly
     */
    get originalEvent(): Event | null | undefined;
}
/**
 * Drag start event
 * @class DragStartEvent
 * @module DragStartEvent
 * @extends DragEvent
 */
export declare class DragStartEvent extends DragEvent<DragEventData> {
    static type: string;
    static cancelable: boolean;
}
/**
 * Drag move event
 * @class DragMoveEvent
 * @module DragMoveEvent
 * @extends DragEvent
 */
export declare class DragMoveEvent extends DragEvent<DragEventData> {
    static type: string;
}
/**
 * DragOverEventData
 * @interface DragOverEventData
 */
export interface DragOverEventData extends DragEventData {
    overContainer: HTMLElement;
    over: HTMLElement;
}
/**
 * Drag over event
 * @class DragOverEvent
 * @module DragOverEvent
 * @extends DragEvent
 */
export declare class DragOverEvent extends DragEvent<DragOverEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * Draggable container you are over
     * @property overContainer
     * @type {HTMLElement}
     * @readonly
     */
    get overContainer(): HTMLElement;
    /**
     * Draggable element you are over
     * @property over
     * @type {HTMLElement}
     * @readonly
     */
    get over(): HTMLElement;
}
export declare function isDragOverEvent(event: AbstractEvent<unknown>): event is DragOverEvent;
/**
 * DragOutEventData
 * @interface DragOutEventData
 */
interface DragOutEventData extends DragEventData {
    overContainer: HTMLElement;
    over: HTMLElement;
}
/**
 * Drag out event
 * @class DragOutEvent
 * @module DragOutEvent
 * @extends DragEvent
 */
export declare class DragOutEvent extends DragEvent<DragOutEventData> {
    static type: string;
    /**
     * Draggable container you are over
     * @property overContainer
     * @type {HTMLElement}
     * @readonly
     */
    get overContainer(): HTMLElement;
    /**
     * Draggable element you left
     * @property over
     * @type {HTMLElement}
     * @readonly
     */
    get over(): HTMLElement;
}
/**
 * DragOverContainerEventData
 * @interface DragOverContainerEventData
 */
interface DragOverContainerEventData extends DragEventData {
    overContainer: HTMLElement;
}
/**
 * Drag over container event
 * @class DragOverContainerEvent
 * @module DragOverContainerEvent
 * @extends DragEvent
 */
export declare class DragOverContainerEvent extends DragEvent<DragOverContainerEventData> {
    static type: string;
    /**
     * Draggable container you are over
     * @property overContainer
     * @type {HTMLElement}
     * @readonly
     */
    get overContainer(): HTMLElement;
}
/**
 * DragOutContainerEventData
 * @interface DragOutContainerEventData
 */
interface DragOutContainerEventData extends DragEventData {
    overContainer: HTMLElement;
}
/**
 * Drag out container event
 * @class DragOutContainerEvent
 * @module DragOutContainerEvent
 * @extends DragEvent
 */
export declare class DragOutContainerEvent extends DragEvent<DragOutContainerEventData> {
    static type: string;
    /**
     * Draggable container you left
     * @property overContainer
     * @type {HTMLElement}
     * @readonly
     */
    get overContainer(): HTMLElement;
}
/**
 * DragPressureEventData
 * @interface DragPressureEventData
 */
interface DragPressureEventData extends DragEventData {
    pressure: number;
}
/**
 * Drag pressure event
 * @class DragPressureEvent
 * @module DragPressureEvent
 * @extends DragEvent
 */
export declare class DragPressureEvent extends DragEvent<DragPressureEventData> {
    static type: string;
    /**
     * Pressure applied on draggable element
     * @property pressure
     * @type {Number}
     * @readonly
     */
    get pressure(): number;
}
/**
 * Drag stop event
 * @class DragStopEvent
 * @module DragStopEvent
 * @extends DragEvent
 */
export declare class DragStopEvent extends DragEvent<DragEventData> {
    static type: string;
    static cancelable: boolean;
}
/**
 * Drag stopped event
 * @class DragStoppedEvent
 * @module DragStoppedEvent
 * @extends DragEvent
 */
export declare class DragStoppedEvent extends DragEvent<DragEventData> {
    static type: string;
}
export {};
//# sourceMappingURL=DragEvent.d.ts.map