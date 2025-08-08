import AbstractEvent from '../../../shared/AbstractEvent';
interface SensorEventData {
    clientX: number;
    clientY: number;
    target: HTMLElement;
    container: HTMLElement;
    originalSource: HTMLElement;
    originalEvent?: Event;
    pressure?: number;
}
/**
 * Base sensor event
 * @class SensorEvent
 * @module SensorEvent
 * @extends AbstractEvent
 */
export declare class SensorEvent extends AbstractEvent<SensorEventData> {
    /**
     * Original browser event that triggered a sensor
     * @property originalEvent
     * @type {Event}
     * @readonly
     */
    get originalEvent(): Event | undefined;
    /**
     * Normalized clientX for both touch and mouse events
     * @property clientX
     * @type {Number}
     * @readonly
     */
    get clientX(): number;
    /**
     * Normalized clientY for both touch and mouse events
     * @property clientY
     * @type {Number}
     * @readonly
     */
    get clientY(): number;
    /**
     * Normalized target for both touch and mouse events
     * Returns the element that is behind cursor or touch pointer
     * @property target
     * @type {HTMLElement}
     * @readonly
     */
    get target(): HTMLElement;
    /**
     * Container that initiated the sensor
     * @property container
     * @type {HTMLElement}
     * @readonly
     */
    get container(): HTMLElement;
    /**
     * Draggables original source element
     * @property originalSource
     * @type {HTMLElement}
     * @readonly
     */
    get originalSource(): HTMLElement;
    /**
     * Trackpad pressure
     * @property pressure
     * @type {Number}
     * @readonly
     */
    get pressure(): number | undefined;
}
/**
 * Drag start sensor event
 * @class DragStartSensorEvent
 * @module DragStartSensorEvent
 * @extends SensorEvent
 */
export declare class DragStartSensorEvent extends SensorEvent {
    static type: string;
}
/**
 * Drag move sensor event
 * @class DragMoveSensorEvent
 * @module DragMoveSensorEvent
 * @extends SensorEvent
 */
export declare class DragMoveSensorEvent extends SensorEvent {
    static type: string;
}
/**
 * Drag stop sensor event
 * @class DragStopSensorEvent
 * @module DragStopSensorEvent
 * @extends SensorEvent
 */
export declare class DragStopSensorEvent extends SensorEvent {
    static type: string;
}
/**
 * Drag pressure sensor event
 * @class DragPressureSensorEvent
 * @module DragPressureSensorEvent
 * @extends SensorEvent
 */
export declare class DragPressureSensorEvent extends SensorEvent {
    static type: string;
}
export {};
//# sourceMappingURL=SensorEvent.d.ts.map