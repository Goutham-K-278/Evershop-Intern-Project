import AbstractEvent from '../../../../shared/AbstractEvent';
import { DragEvent, DragEventData } from '../../../DragEvent';
import { SensorEvent } from '../../../Sensors/SensorEvent';
interface MirrorEventData {
    source: HTMLElement;
    originalSource: HTMLElement;
    sourceContainer: HTMLElement;
    sensorEvent: SensorEvent;
    dragEvent: DragEvent<DragEventData>;
}
/**
 * Base mirror event
 * @class MirrorEvent
 * @module MirrorEvent
 * @extends AbstractEvent
 */
export declare class MirrorEvent<T extends MirrorEventData> extends AbstractEvent<MirrorEventData> {
    data: T;
    /**
     * MirrorEvent constructor.
     * @constructs MirrorEvent
     * @param {MirrorEventData} data - Event data
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
     * Drag event
     * @property dragEvent
     * @type {DragEvent}
     * @readonly
     */
    get dragEvent(): DragEvent<DragEventData>;
    /**
     * Original event that triggered sensor event
     * @property originalEvent
     * @type {Event}
     * @readonly
     */
    get originalEvent(): Event | null | undefined;
}
/**
 * Mirror create event
 * @class MirrorCreateEvent
 * @module MirrorCreateEvent
 * @extends MirrorEvent
 */
export declare class MirrorCreateEvent extends MirrorEvent<MirrorEventData> {
    static type: string;
}
interface MirrorCreatedEventData extends MirrorEventData {
    mirror: HTMLElement;
}
/**
 * Mirror created event
 * @class MirrorCreatedEvent
 * @module MirrorCreatedEvent
 * @extends MirrorEvent
 */
export declare class MirrorCreatedEvent extends MirrorEvent<MirrorCreatedEventData> {
    static type: string;
    /**
     * Draggables mirror element
     * @property mirror
     * @type {HTMLElement}
     * @readonly
     */
    get mirror(): HTMLElement;
}
interface MirrorAttachedEventData extends MirrorEventData {
    mirror: HTMLElement;
}
/**
 * Mirror attached event
 * @class MirrorAttachedEvent
 * @module MirrorAttachedEvent
 * @extends MirrorEvent
 */
export declare class MirrorAttachedEvent extends MirrorEvent<MirrorAttachedEventData> {
    static type: string;
    /**
     * Draggables mirror element
     * @property mirror
     * @type {HTMLElement}
     * @readonly
     */
    get mirror(): HTMLElement;
}
interface MirrorMoveEventData extends MirrorEventData {
    mirror: HTMLElement;
    passedThreshX: boolean;
    passedThreshY: boolean;
}
/**
 * Mirror move event
 * @class MirrorMoveEvent
 * @module MirrorMoveEvent
 * @extends MirrorEvent
 */
export declare class MirrorMoveEvent extends MirrorEvent<MirrorMoveEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * Draggables mirror element
     * @property mirror
     * @type {HTMLElement}
     * @readonly
     */
    get mirror(): HTMLElement;
    /**
     * Sensor has exceeded mirror's threshold on x axis
     * @type {Boolean}
     * @readonly
     */
    get passedThreshX(): boolean;
    /**
     * Sensor has exceeded mirror's threshold on y axis
     * @type {Boolean}
     * @readonly
     */
    get passedThreshY(): boolean;
}
interface MirrorMovedEventData extends MirrorEventData {
    mirror: HTMLElement;
    passedThreshX: boolean;
    passedThreshY: boolean;
}
/**
 * Mirror moved event
 * @class MirrorMovedEvent
 * @module MirrorMovedEvent
 * @extends MirrorEvent
 */
export declare class MirrorMovedEvent extends MirrorEvent<MirrorMovedEventData> {
    static type: string;
    /**
     * Draggables mirror element
     * @property mirror
     * @type {HTMLElement}
     * @readonly
     */
    get mirror(): HTMLElement;
    /**
     * Sensor has exceeded mirror's threshold on x axis
     * @type {Boolean}
     * @readonly
     */
    get passedThreshX(): boolean;
    /**
     * Sensor has exceeded mirror's threshold on y axis
     * @type {Boolean}
     * @readonly
     */
    get passedThreshY(): boolean;
}
interface MirrorDestroyEventData extends MirrorEventData {
    mirror: HTMLElement;
}
/**
 * Mirror destroy event
 * @class MirrorDestroyEvent
 * @module MirrorDestroyEvent
 * @extends MirrorEvent
 */
export declare class MirrorDestroyEvent extends MirrorEvent<MirrorDestroyEventData> {
    static type: string;
    static cancelable: boolean;
    /**
     * Draggables mirror element
     * @property mirror
     * @type {HTMLElement}
     * @readonly
     */
    get mirror(): HTMLElement;
}
export {};
//# sourceMappingURL=MirrorEvent.d.ts.map