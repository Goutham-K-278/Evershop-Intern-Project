/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module engine/model/rootelement
 */
import Element from './element';
/**
 * Type of {@link module:engine/model/element~Element} that is a root of a model tree.
 */
export default class RootElement extends Element {
    /**
     * Creates root element.
     *
     * @param document Document that is an owner of this root.
     * @param name Node name.
     * @param rootName Unique root name used to identify this root element by {@link module:engine/model/document~Document}.
     */
    constructor(document, name, rootName = 'main') {
        super(name);
        this._document = document;
        this.rootName = rootName;
    }
    /**
     * {@link module:engine/model/document~Document Document} that owns this root element.
     */
    get document() {
        return this._document;
    }
    /**
     * Converts `RootElement` instance to `string` containing it's name.
     *
     * @returns `RootElement` instance converted to `string`.
     */
    toJSON() {
        return this.rootName;
    }
}
// The magic of type inference using `is` method is centralized in `TypeCheckable` class.
// Proper overload would interfere with that.
RootElement.prototype.is = function (type, name) {
    if (!name) {
        return type === 'rootElement' || type === 'model:rootElement' ||
            // From super.is(). This is highly utilised method and cannot call super. See ckeditor/ckeditor5#6529.
            type === 'element' || type === 'model:element' ||
            type === 'node' || type === 'model:node';
    }
    return name === this.name && (type === 'rootElement' || type === 'model:rootElement' ||
        // From super.is(). This is highly utilised method and cannot call super. See ckeditor/ckeditor5#6529.
        type === 'element' || type === 'model:element');
};
