import { FixMeAny } from '../types';
/**
 * All draggable plugins inherit from this class.
 * @abstract
 * @class AbstractPlugin
 * @module AbstractPlugin
 */
export declare abstract class AbstractPlugin {
    protected draggable: FixMeAny;
    /**
     * AbstractPlugin constructor.
     * @constructs AbstractPlugin
     * @param {Draggable} draggable - Draggable instance
     */
    constructor(draggable: FixMeAny);
    /**
     * Override to add listeners
     * @abstract
     */
    attach(): void;
    /**
     * Override to remove listeners
     * @abstract
     */
    detach(): void;
}
//# sourceMappingURL=AbstractPlugin.d.ts.map