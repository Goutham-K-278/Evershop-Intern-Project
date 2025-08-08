import AbstractPlugin from '../../shared/AbstractPlugin';
import { FixMeAny } from '../../shared/types';
/**
 * ResizeMirror default options
 * @property {Object} defaultOptions
 * @type {Object}
 */
export declare const defaultOptions: {};
/**
 * The ResizeMirror plugin resizes the mirror element to the dimensions of the draggable element that the mirror is hovering over
 * @class ResizeMirror
 * @module ResizeMirror
 * @extends AbstractPlugin
 */
export default class ResizeMirror extends AbstractPlugin {
    private lastWidth;
    private lastHeight;
    private mirror;
    /**
     * ResizeMirror constructor.
     * @constructs ResizeMirror
     * @param {Draggable} draggable - Draggable instance
     */
    constructor(draggable: FixMeAny);
    /**
     * Attaches plugins event listeners
     */
    attach(): void;
    /**
     * Detaches plugins event listeners
     */
    detach(): void;
    /**
     * Returns options passed through draggable
     * @return {Object}
     */
    getOptions(): any;
    /**
     * Mirror created handler
     * @param {MirrorCreatedEvent} mirrorEvent
     * @private
     */
    private onMirrorCreated;
    /**
     * Mirror destroy handler
     * @param {MirrorDestroyEvent} mirrorEvent
     * @private
     */
    private onMirrorDestroy;
    /**
     * Drag over handler
     * @param {DragOverEvent | DragOverContainer} dragEvent
     * @private
     */
    private onDragOver;
    /**
     * Resize function for
     * @param {DragOverEvent | DragOverContainer} dragEvent
     * @private
     */
    private resize;
}
//# sourceMappingURL=ResizeMirror.d.ts.map