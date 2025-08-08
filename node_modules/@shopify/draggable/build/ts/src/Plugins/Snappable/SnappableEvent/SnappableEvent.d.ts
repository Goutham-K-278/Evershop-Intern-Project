import AbstractEvent from '../../../shared/AbstractEvent';
import { DragEvent, DragEventData } from '../../../Draggable/DragEvent';
interface SnapEventData {
    dragEvent: DragEvent<DragEventData>;
    snappable: HTMLElement;
}
/**
 * Base snap event
 * @class SnapEvent
 * @module SnapEvent
 * @extends AbstractEvent
 */
export declare class SnapEvent extends AbstractEvent<SnapEventData> {
    static type: string;
    /**
     * Drag event that triggered this snap event
     * @property dragEvent
     * @type {DragEvent}
     * @readonly
     */
    get dragEvent(): DragEvent<DragEventData>;
    /**
     * Snappable element
     * @property snappable
     * @type {HTMLElement}
     * @readonly
     */
    get snappable(): HTMLElement;
}
/**
 * Snap in event
 * @class SnapInEvent
 * @module SnapInEvent
 * @extends SnapEvent
 */
export declare class SnapInEvent extends SnapEvent {
    static type: string;
    static cancelable: boolean;
}
/**
 * Snap out event
 * @class SnapOutEvent
 * @module SnapOutEvent
 * @extends SnapEvent
 */
export declare class SnapOutEvent extends SnapEvent {
    static type: string;
    static cancelable: boolean;
}
export {};
//# sourceMappingURL=SnappableEvent.d.ts.map