/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module engine/model/treewalker
 */
import Element from './element';
import { default as Position, getTextNodeAtPosition, getNodeAfterPosition, getNodeBeforePosition } from './position';
import Text from './text';
import TextProxy from './textproxy';
import { CKEditorError } from '@ckeditor/ckeditor5-utils';
/**
 * Position iterator class. It allows to iterate forward and backward over the document.
 */
export default class TreeWalker {
    /**
     * Creates a range iterator. All parameters are optional, but you have to specify either `boundaries` or `startPosition`.
     *
     * @param options Object with configuration.
     */
    constructor(options) {
        if (!options || (!options.boundaries && !options.startPosition)) {
            /**
             * Neither boundaries nor starting position of a `TreeWalker` have been defined.
             *
             * @error model-tree-walker-no-start-position
             */
            throw new CKEditorError('model-tree-walker-no-start-position', null);
        }
        const direction = options.direction || 'forward';
        if (direction != 'forward' && direction != 'backward') {
            /**
             * Only `backward` and `forward` direction allowed.
             *
             * @error model-tree-walker-unknown-direction
             */
            throw new CKEditorError('model-tree-walker-unknown-direction', options, { direction });
        }
        this.direction = direction;
        this.boundaries = options.boundaries || null;
        if (options.startPosition) {
            this.position = options.startPosition.clone();
        }
        else {
            this.position = Position._createAt(this.boundaries[this.direction == 'backward' ? 'end' : 'start']);
        }
        // Reset position stickiness in case it was set to other value, as the stickiness is kept after cloning.
        this.position.stickiness = 'toNone';
        this.singleCharacters = !!options.singleCharacters;
        this.shallow = !!options.shallow;
        this.ignoreElementEnd = !!options.ignoreElementEnd;
        this._boundaryStartParent = this.boundaries ? this.boundaries.start.parent : null;
        this._boundaryEndParent = this.boundaries ? this.boundaries.end.parent : null;
        this._visitedParent = this.position.parent;
    }
    /**
     * Iterable interface.
     *
     * @returns {Iterable.<module:engine/model/treewalker~TreeWalkerValue>}
     */
    [Symbol.iterator]() {
        return this;
    }
    /**
     * Moves {@link #position} in the {@link #direction} skipping values as long as the callback function returns `true`.
     *
     * For example:
     *
     * ```ts
     * walker.skip( value => value.type == 'text' ); // <paragraph>[]foo</paragraph> -> <paragraph>foo[]</paragraph>
     * walker.skip( () => true ); // Move the position to the end: <paragraph>[]foo</paragraph> -> <paragraph>foo</paragraph>[]
     * walker.skip( () => false ); // Do not move the position.
     * ```
     *
     * @param skip Callback function. Gets {@link module:engine/model/treewalker~TreeWalkerValue} and should
     * return `true` if the value should be skipped or `false` if not.
     */
    skip(skip) {
        let done, value, prevPosition, prevVisitedParent;
        do {
            prevPosition = this.position;
            prevVisitedParent = this._visitedParent;
            ({ done, value } = this.next());
        } while (!done && skip(value));
        if (!done) {
            this.position = prevPosition;
            this._visitedParent = prevVisitedParent;
        }
    }
    /**
     * Gets the next tree walker's value.
     */
    next() {
        if (this.direction == 'forward') {
            return this._next();
        }
        else {
            return this._previous();
        }
    }
    /**
     * Makes a step forward in model. Moves the {@link #position} to the next position and returns the encountered value.
     */
    _next() {
        const previousPosition = this.position;
        const position = this.position.clone();
        const parent = this._visitedParent;
        // We are at the end of the root.
        if (parent.parent === null && position.offset === parent.maxOffset) {
            return { done: true, value: undefined };
        }
        // We reached the walker boundary.
        if (parent === this._boundaryEndParent && position.offset == this.boundaries.end.offset) {
            return { done: true, value: undefined };
        }
        // Get node just after the current position.
        // Use a highly optimized version instead of checking the text node first and then getting the node after. See #6582.
        const textNodeAtPosition = getTextNodeAtPosition(position, parent);
        const node = textNodeAtPosition ? textNodeAtPosition : getNodeAfterPosition(position, parent, textNodeAtPosition);
        if (node instanceof Element) {
            if (!this.shallow) {
                // Manual operations on path internals for optimization purposes. Here and in the rest of the method.
                position.path.push(0);
                this._visitedParent = node;
            }
            else {
                position.offset++;
            }
            this.position = position;
            return formatReturnValue('elementStart', node, previousPosition, position, 1);
        }
        else if (node instanceof Text) {
            let charactersCount;
            if (this.singleCharacters) {
                charactersCount = 1;
            }
            else {
                let offset = node.endOffset;
                if (this._boundaryEndParent == parent && this.boundaries.end.offset < offset) {
                    offset = this.boundaries.end.offset;
                }
                charactersCount = offset - position.offset;
            }
            const offsetInTextNode = position.offset - node.startOffset;
            const item = new TextProxy(node, offsetInTextNode, charactersCount);
            position.offset += charactersCount;
            this.position = position;
            return formatReturnValue('text', item, previousPosition, position, charactersCount);
        }
        else {
            // `node` is not set, we reached the end of current `parent`.
            position.path.pop();
            position.offset++;
            this.position = position;
            this._visitedParent = parent.parent;
            if (this.ignoreElementEnd) {
                return this._next();
            }
            else {
                return formatReturnValue('elementEnd', parent, previousPosition, position);
            }
        }
    }
    /**
     * Makes a step backward in model. Moves the {@link #position} to the previous position and returns the encountered value.
     */
    _previous() {
        const previousPosition = this.position;
        const position = this.position.clone();
        const parent = this._visitedParent;
        // We are at the beginning of the root.
        if (parent.parent === null && position.offset === 0) {
            return { done: true, value: undefined };
        }
        // We reached the walker boundary.
        if (parent == this._boundaryStartParent && position.offset == this.boundaries.start.offset) {
            return { done: true, value: undefined };
        }
        // Get node just before the current position.
        // Use a highly optimized version instead of checking the text node first and then getting the node before. See #6582.
        const positionParent = position.parent;
        const textNodeAtPosition = getTextNodeAtPosition(position, positionParent);
        const node = textNodeAtPosition ? textNodeAtPosition : getNodeBeforePosition(position, positionParent, textNodeAtPosition);
        if (node instanceof Element) {
            position.offset--;
            if (!this.shallow) {
                position.path.push(node.maxOffset);
                this.position = position;
                this._visitedParent = node;
                if (this.ignoreElementEnd) {
                    return this._previous();
                }
                else {
                    return formatReturnValue('elementEnd', node, previousPosition, position);
                }
            }
            else {
                this.position = position;
                return formatReturnValue('elementStart', node, previousPosition, position, 1);
            }
        }
        else if (node instanceof Text) {
            let charactersCount;
            if (this.singleCharacters) {
                charactersCount = 1;
            }
            else {
                let offset = node.startOffset;
                if (this._boundaryStartParent == parent && this.boundaries.start.offset > offset) {
                    offset = this.boundaries.start.offset;
                }
                charactersCount = position.offset - offset;
            }
            const offsetInTextNode = position.offset - node.startOffset;
            const item = new TextProxy(node, offsetInTextNode - charactersCount, charactersCount);
            position.offset -= charactersCount;
            this.position = position;
            return formatReturnValue('text', item, previousPosition, position, charactersCount);
        }
        else {
            // `node` is not set, we reached the beginning of current `parent`.
            position.path.pop();
            this.position = position;
            this._visitedParent = parent.parent;
            return formatReturnValue('elementStart', parent, previousPosition, position, 1);
        }
    }
}
function formatReturnValue(type, item, previousPosition, nextPosition, length) {
    return {
        done: false,
        value: {
            type,
            item,
            previousPosition,
            nextPosition,
            length
        }
    };
}
