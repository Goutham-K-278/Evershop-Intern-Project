import AbstractEvent from '../../shared/AbstractEvent';
import { FixMeAny } from '../../shared/types';
/**
 * DraggableEventData
 * @interface DraggableEventData
 */
interface DraggableEventData {
    draggable: FixMeAny;
}
/**
 * Base draggable event
 * @class DraggableEvent
 * @module DraggableEvent
 * @extends AbstractEvent
 */
export declare class DraggableEvent extends AbstractEvent<DraggableEventData> {
    static type: string;
    /**
     * Draggable instance
     * @property draggable
     * @type {Draggable}
     * @readonly
     */
    get draggable(): any;
}
/**
 * Draggable initialized event
 * @class DraggableInitializedEvent
 * @module DraggableInitializedEvent
 * @extends DraggableEvent
 */
export declare class DraggableInitializedEvent extends DraggableEvent {
    static type: string;
}
/**
 * Draggable destory event
 * @class DraggableInitializedEvent
 * @module DraggableDestroyEvent
 * @extends DraggableDestroyEvent
 */
export declare class DraggableDestroyEvent extends DraggableEvent {
    static type: string;
}
export {};
//# sourceMappingURL=DraggableEvent.d.ts.map