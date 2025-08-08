/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module engine/view/documentfragment
 */
import TypeCheckable from './typecheckable';
import Text from './text';
import TextProxy from './textproxy';
import { EmitterMixin, isIterable } from '@ckeditor/ckeditor5-utils';
/**
 * Document fragment.
 *
 * To create a new document fragment instance use the
 * {@link module:engine/view/upcastwriter~UpcastWriter#createDocumentFragment `UpcastWriter#createDocumentFragment()`}
 * method.
 */
export default class DocumentFragment extends EmitterMixin(TypeCheckable) {
    /**
     * Creates new DocumentFragment instance.
     *
     * @protected
     * @param {module:engine/view/document~Document} document The document to which this document fragment belongs.
     * @param {module:engine/view/node~Node|Iterable.<module:engine/view/node~Node>} [children]
     * A list of nodes to be inserted into the created document fragment.
     */
    constructor(document, children) {
        super();
        /**
         * The document to which this document fragment belongs.
         *
         * @readonly
         * @member {module:engine/view/document~Document}
         */
        this.document = document;
        /**
         * Array of child nodes.
         *
         * @protected
         * @member {Array.<module:engine/view/node~Node>} module:engine/view/documentfragment~DocumentFragment#_children
         */
        this._children = [];
        if (children) {
            this._insertChild(0, children);
        }
        /**
         * Map of custom properties.
         * Custom properties can be added to document fragment instance.
         *
         * @protected
         * @member {Map}
         */
        this._customProperties = new Map();
    }
    /**
     * Iterable interface.
     *
     * Iterates over nodes added to this document fragment.
     *
     * @returns {Iterable.<module:engine/view/node~Node>}
     */
    [Symbol.iterator]() {
        return this._children[Symbol.iterator]();
    }
    /**
     * Number of child nodes in this document fragment.
     *
     * @readonly
     * @type {Number}
     */
    get childCount() {
        return this._children.length;
    }
    /**
     * Is `true` if there are no nodes inside this document fragment, `false` otherwise.
     *
     * @readonly
     * @type {Boolean}
     */
    get isEmpty() {
        return this.childCount === 0;
    }
    /**
     * Artificial root of `DocumentFragment`. Returns itself. Added for compatibility reasons.
     *
     * @readonly
     * @type {module:engine/model/documentfragment~DocumentFragment}
     */
    get root() {
        return this;
    }
    /**
     * Artificial parent of `DocumentFragment`. Returns `null`. Added for compatibility reasons.
     *
     * @readonly
     * @type {null}
     */
    get parent() {
        return null;
    }
    /**
     * Returns the custom property value for the given key.
     *
     * @param {String|Symbol} key
     * @returns {*}
     */
    getCustomProperty(key) {
        return this._customProperties.get(key);
    }
    /**
     * Returns an iterator which iterates over this document fragment's custom properties.
     * Iterator provides `[ key, value ]` pairs for each stored property.
     *
     * @returns {Iterable.<*>}
     */
    *getCustomProperties() {
        yield* this._customProperties.entries();
    }
    /**
     * {@link module:engine/view/documentfragment~DocumentFragment#_insertChild Insert} a child node or a list of child nodes at the end
     * and sets the parent of these nodes to this fragment.
     *
     * @param {module:engine/view/item~Item|Iterable.<module:engine/view/item~Item>} items Items to be inserted.
     * @returns {Number} Number of appended nodes.
     */
    _appendChild(items) {
        return this._insertChild(this.childCount, items);
    }
    /**
     * Gets child at the given index.
     *
     * @param {Number} index Index of child.
     * @returns {module:engine/view/node~Node} Child node.
     */
    getChild(index) {
        return this._children[index];
    }
    /**
     * Gets index of the given child node. Returns `-1` if child node is not found.
     *
     * @param {module:engine/view/node~Node} node Child node.
     * @returns {Number} Index of the child node.
     */
    getChildIndex(node) {
        return this._children.indexOf(node);
    }
    /**
     * Gets child nodes iterator.
     *
     * @returns {Iterable.<module:engine/view/node~Node>} Child nodes iterator.
     */
    getChildren() {
        return this._children[Symbol.iterator]();
    }
    /**
     * Inserts a child node or a list of child nodes on the given index and sets the parent of these nodes to
     * this fragment.
     *
     * @param {Number} index Position where nodes should be inserted.
     * @param {module:engine/view/item~Item|Iterable.<module:engine/view/item~Item>} items Items to be inserted.
     * @returns {Number} Number of inserted nodes.
     */
    _insertChild(index, items) {
        this._fireChange('children', this);
        let count = 0;
        const nodes = normalize(this.document, items);
        for (const node of nodes) {
            // If node that is being added to this element is already inside another element, first remove it from the old parent.
            if (node.parent !== null) {
                node._remove();
            }
            node.parent = this;
            this._children.splice(index, 0, node);
            index++;
            count++;
        }
        return count;
    }
    /**
     * Removes number of child nodes starting at the given index and set the parent of these nodes to `null`.
     *
     * @internal
     * @param {Number} index Number of the first node to remove.
     * @param {Number} [howMany=1] Number of nodes to remove.
     * @returns {Array.<module:engine/view/node~Node>} The array of removed nodes.
     */
    _removeChildren(index, howMany = 1) {
        this._fireChange('children', this);
        for (let i = index; i < index + howMany; i++) {
            this._children[i].parent = null;
        }
        return this._children.splice(index, howMany);
    }
    /**
     * Fires `change` event with given type of the change.
     *
     * @private
     * @param {module:engine/view/document~ChangeType} type Type of the change.
     * @param {module:engine/view/node~Node} node Changed node.
     * @fires module:engine/view/node~Node#change
     */
    _fireChange(type, node) {
        this.fire('change:' + type, node);
    }
    /**
     * Sets a custom property. They can be used to add special data to elements.
     *
     * @see module:engine/view/downcastwriter~DowncastWriter#setCustomProperty
     * @protected
     * @param {String|Symbol} key
     * @param {*} value
     */
    _setCustomProperty(key, value) {
        this._customProperties.set(key, value);
    }
    /**
     * Removes the custom property stored under the given key.
     *
     * @see module:engine/view/downcastwriter~DowncastWriter#removeCustomProperty
     * @protected
     * @param {String|Symbol} key
     * @returns {Boolean} Returns true if property was removed.
     */
    _removeCustomProperty(key) {
        return this._customProperties.delete(key);
    }
}
/**
 * Checks whether this object is of the given type.
 *
 *		docFrag.is( 'documentFragment' ); // -> true
 *		docFrag.is( 'view:documentFragment' ); // -> true
 *
 *		docFrag.is( 'model:documentFragment' ); // -> false
 *		docFrag.is( 'element' ); // -> false
 *		docFrag.is( 'node' ); // -> false
 *
 * {@link module:engine/view/node~Node#is Check the entire list of view objects} which implement the `is()` method.
 *
 * @param {String} type
 * @returns {Boolean}
 */
DocumentFragment.prototype.is = function (type) {
    return type === 'documentFragment' || type === 'view:documentFragment';
};
// Converts strings to Text and non-iterables to arrays.
//
// @param {String|module:engine/view/item~Item|Iterable.<String|module:engine/view/item~Item>}
// @returns {Iterable.<module:engine/view/node~Node>}
function normalize(document, nodes) {
    // Separate condition because string is iterable.
    if (typeof nodes == 'string') {
        return [new Text(document, nodes)];
    }
    if (!isIterable(nodes)) {
        nodes = [nodes];
    }
    // Array.from to enable .map() on non-arrays.
    return Array.from(nodes)
        .map(node => {
        if (typeof node == 'string') {
            return new Text(document, node);
        }
        if (node instanceof TextProxy) {
            return new Text(document, node.data);
        }
        return node;
    });
}
