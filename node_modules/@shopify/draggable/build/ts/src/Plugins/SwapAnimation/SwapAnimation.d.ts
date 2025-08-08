import AbstractPlugin from '../../shared/AbstractPlugin';
import { FixMeAny } from '../../shared/types';
interface Options {
    duration: number;
    easingFunction: string;
    horizontal: boolean;
}
/**
 * SwapAnimation default options
 * @property {Object} defaultOptions
 * @property {Number} defaultOptions.duration
 * @property {String} defaultOptions.easingFunction
 * @property {Boolean} defaultOptions.horizontal
 * @type {Object}
 */
export declare const defaultOptions: Options;
/**
 * SwapAnimation plugin adds swap animations for sortable
 * @class SwapAnimation
 * @module SwapAnimation
 * @extends AbstractPlugin
 */
export default class SwapAnimation extends AbstractPlugin {
    private options;
    private lastAnimationFrame;
    /**
     * SwapAnimation constructor.
     * @constructs SwapAnimation
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
     * Sortable sorted handler
     * @param {SortableSortedEvent} sortableEvent
     * @private
     */
    onSortableSorted({ oldIndex, newIndex, dragEvent }: FixMeAny): void;
}
export {};
//# sourceMappingURL=SwapAnimation.d.ts.map