/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module ui/template
 */
/* global document */
import View from './view';
import ViewCollection from './viewcollection';
import { CKEditorError, EmitterMixin, isNode, toArray } from '@ckeditor/ckeditor5-utils';
import { isObject, cloneDeepWith } from 'lodash-es';
const xhtmlNs = 'http://www.w3.org/1999/xhtml';
/**
 * A basic Template class. It renders a DOM HTML element or text from a
 * {@link module:ui/template~TemplateDefinition definition} and supports element attributes, children,
 * bindings to {@link module:utils/observablemixin~Observable observables} and DOM event propagation.
 *
 * A simple template can look like this:
 *
 *		const bind = Template.bind( observable, emitter );
 *
 *		new Template( {
 *			tag: 'p',
 *			attributes: {
 *				class: 'foo',
 *				style: {
 *					backgroundColor: 'yellow'
 *				}
 *			},
 *			on: {
 *				click: bind.to( 'clicked' )
 *			},
 *			children: [
 *				'A paragraph.'
 *			]
 *		} ).render();
 *
 * and it will render the following HTML element:
 *
 *		<p class="foo" style="background-color: yellow;">A paragraph.</p>
 *
 * Additionally, the `observable` will always fire `clicked` upon clicking `<p>` in the DOM.
 *
 * See {@link module:ui/template~TemplateDefinition} to know more about templates and complex
 * template definitions.
 *
* @mixes module:utils/emittermixin~EmitterMixin
 */
export default class Template extends EmitterMixin() {
    /**
     * Creates an instance of the {@link ~Template} class.
     *
     * @param {module:ui/template~TemplateDefinition} def The definition of the template.
     */
    constructor(def) {
        super();
        Object.assign(this, normalize(clone(def)));
        /**
         * Indicates whether this particular Template instance has been
         * {@link #render rendered}.
         *
         * @readonly
         * @protected
         * @member {Boolean}
         */
        this._isRendered = false;
        /**
         * The tag (`tagName`) of this template, e.g. `div`. It also indicates that the template
         * renders to an HTML element.
         *
         * @member {String} #tag
         */
        /**
         * The text of the template. It also indicates that the template renders to a DOM text node.
         *
         * @member {Array.<String|module:ui/template~TemplateValueSchema>} #text
         */
        /**
         * The attributes of the template, e.g. `{ id: [ 'ck-id' ] }`, corresponding with
         * the attributes of an HTML element.
         *
         * **Note**: This property only makes sense when {@link #tag} is defined.
         *
         * @member {Object} #attributes
         */
        /**
         * The children of the template. They can be either:
         * * independent instances of {@link ~Template} (sub–templates),
         * * native DOM Nodes.
         *
         * **Note**: This property only makes sense when {@link #tag} is defined.
         *
         * @member {Array.<module:ui/template~Template|Node>} #children
         */
        /**
         * The DOM event listeners of the template.
         *
         * @member {Object} #eventListeners
         */
        /**
         * The data used by the {@link #revert} method to restore a node to its original state.
         *
         * See: {@link #apply}.
         *
         * @readonly
         * @protected
         * @member {module:ui/template~RenderData}
         */
        this._revertData = null;
    }
    /**
     * Renders a DOM Node (an HTML element or text) out of the template.
     *
     *		const domNode = new Template( { ... } ).render();
     *
     * See: {@link #apply}.
     *
     * @returns {HTMLElement|Text}
     */
    render() {
        const node = this._renderNode({
            intoFragment: true
        });
        this._isRendered = true;
        return node;
    }
    /**
     * Applies the template to an existing DOM Node, either HTML element or text.
     *
     * **Note:** No new DOM nodes will be created. Applying extends:
     *
     * {@link module:ui/template~TemplateDefinition attributes},
     * {@link module:ui/template~TemplateDefinition event listeners}, and
     * `textContent` of {@link module:ui/template~TemplateDefinition children} only.
     *
     * **Note:** Existing `class` and `style` attributes are extended when a template
     * is applied to an HTML element, while other attributes and `textContent` are overridden.
     *
     * **Note:** The process of applying a template can be easily reverted using the
     * {@link module:ui/template~Template#revert} method.
     *
     *		const element = document.createElement( 'div' );
     *		const observable = new Model( { divClass: 'my-div' } );
     *		const emitter = Object.create( EmitterMixin );
     *		const bind = Template.bind( observable, emitter );
     *
     *		new Template( {
     *			attributes: {
     *				id: 'first-div',
     *				class: bind.to( 'divClass' )
     *			},
     *			on: {
     *				click: bind( 'elementClicked' ) // Will be fired by the observable.
     *			},
     *			children: [
     *				'Div text.'
     *			]
     *		} ).apply( element );
     *
     *		console.log( element.outerHTML ); // -> '<div id="first-div" class="my-div"></div>'
     *
     * @see module:ui/template~Template#render
     * @see module:ui/template~Template#revert
     * @param {Node} node Root node for the template to apply.
     */
    apply(node) {
        this._revertData = getEmptyRevertData();
        this._renderNode({
            node,
            intoFragment: false,
            isApplying: true,
            revertData: this._revertData
        });
        return node;
    }
    /**
     * Reverts a template {@link module:ui/template~Template#apply applied} to a DOM node.
     *
     * @param {Node} node The root node for the template to revert. In most of the cases, it is the
     * same node used by {@link module:ui/template~Template#apply}.
     */
    revert(node) {
        if (!this._revertData) {
            /**
             * Attempting to revert a template which has not been applied yet.
             *
             * @error ui-template-revert-not-applied
             */
            throw new CKEditorError('ui-template-revert-not-applied', [this, node]);
        }
        this._revertTemplateFromNode(node, this._revertData);
    }
    /**
     * Returns an iterator which traverses the template in search of {@link module:ui/view~View}
     * instances and returns them one by one.
     *
     *		const viewFoo = new View();
     *		const viewBar = new View();
     *		const viewBaz = new View();
     *		const template = new Template( {
     *			tag: 'div',
     *			children: [
     *				viewFoo,
     *				{
     *					tag: 'div',
     *					children: [
     *						viewBar
     *					]
     *				},
     *				viewBaz
     *			]
     *		} );
     *
     *		// Logs: viewFoo, viewBar, viewBaz
     *		for ( const view of template.getViews() ) {
     *			console.log( view );
     *		}
     *
     * @returns {Iterable.<module:ui/view~View>}
     */
    *getViews() {
        function* search(def) {
            if (def.children) {
                for (const child of def.children) {
                    if (isView(child)) {
                        yield child;
                    }
                    else if (isTemplate(child)) {
                        yield* search(child);
                    }
                }
            }
        }
        yield* search(this);
    }
    /**
     * An entry point to the interface which binds DOM nodes to
     * {@link module:utils/observablemixin~Observable observables}.
     * There are two types of bindings:
     *
     * * HTML element attributes or text `textContent` synchronized with attributes of an
     * {@link module:utils/observablemixin~Observable}. Learn more about {@link module:ui/template~BindChain#to}
     * and {@link module:ui/template~BindChain#if}.
     *
     *		const bind = Template.bind( observable, emitter );
     *
     *		new Template( {
     *			attributes: {
     *				// Binds the element "class" attribute to observable#classAttribute.
     *				class: bind.to( 'classAttribute' )
     *			}
     *		} ).render();
     *
     * * DOM events fired on HTML element propagated through
     * {@link module:utils/observablemixin~Observable}. Learn more about {@link module:ui/template~BindChain#to}.
     *
     *		const bind = Template.bind( observable, emitter );
     *
     *		new Template( {
     *			on: {
     *				// Will be fired by the observable.
     *				click: bind( 'elementClicked' )
     *			}
     *		} ).render();
     *
     * Also see {@link module:ui/view~View#bindTemplate}.
     *
     * @param {module:utils/observablemixin~Observable} observable An observable which provides boundable attributes.
     * @param {module:utils/emittermixin~Emitter} emitter An emitter that listens to observable attribute
     * changes or DOM Events (depending on the kind of the binding). Usually, a {@link module:ui/view~View} instance.
     * @returns {module:ui/template~BindChain}
     */
    static bind(observable, emitter) {
        return {
            to(eventNameOrFunctionOrAttribute, callback) {
                return new TemplateToBinding({
                    eventNameOrFunction: eventNameOrFunctionOrAttribute,
                    attribute: eventNameOrFunctionOrAttribute,
                    observable, emitter, callback
                });
            },
            if(attribute, valueIfTrue, callback) {
                return new TemplateIfBinding({
                    observable, emitter, attribute, valueIfTrue, callback
                });
            }
        };
    }
    /**
     * Extends an existing {@link module:ui/template~Template} instance with some additional content
     * from another {@link module:ui/template~TemplateDefinition}.
     *
     *		const bind = Template.bind( observable, emitter );
     *
     *		const template = new Template( {
     *			tag: 'p',
     *			attributes: {
     *				class: 'a',
     *				data-x: bind.to( 'foo' )
     *			},
     *			children: [
     *				{
     *					tag: 'span',
     *					attributes: {
     *						class: 'b'
     *					},
     *					children: [
     *						'Span'
     *					]
     *				}
     *			]
     *		 } );
     *
     *		// Instance-level extension.
     *		Template.extend( template, {
     *			attributes: {
     *				class: 'b',
     *				data-x: bind.to( 'bar' )
     *			},
     *			children: [
     *				{
     *					attributes: {
     *						class: 'c'
     *					}
     *				}
     *			]
     *		} );
     *
     *		// Child extension.
     *		Template.extend( template.children[ 0 ], {
     *			attributes: {
     *				class: 'd'
     *			}
     *		} );
     *
     * the `outerHTML` of `template.render()` is:
     *
     *		<p class="a b" data-x="{ observable.foo } { observable.bar }">
     *			<span class="b c d">Span</span>
     *		</p>
     *
     * @param {module:ui/template~Template} template An existing template instance to be extended.
     * @param {module:ui/template~TemplateDefinition} def Additional definition to be applied to a template.
     */
    static extend(template, def) {
        if (template._isRendered) {
            /**
             * Extending a template after rendering may not work as expected. To make sure
             * the {@link module:ui/template~Template.extend extending} works for an element,
             * make sure it happens before {@link #render} is called.
             *
             * @error template-extend-render
             */
            throw new CKEditorError('template-extend-render', [this, template]);
        }
        extendTemplate(template, normalize(clone(def)));
    }
    /**
     * Renders a DOM Node (either an HTML element or text) out of the template.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderNode(data) {
        let isInvalid;
        if (data.node) {
            // When applying, a definition cannot have "tag" and "text" at the same time.
            isInvalid = this.tag && this.text;
        }
        else {
            // When rendering, a definition must have either "tag" or "text": XOR( this.tag, this.text ).
            isInvalid = this.tag ? this.text : !this.text;
        }
        if (isInvalid) {
            /**
             * Node definition cannot have the "tag" and "text" properties at the same time.
             * Node definition must have either "tag" or "text" when rendering a new Node.
             *
             * @error ui-template-wrong-syntax
             */
            throw new CKEditorError('ui-template-wrong-syntax', this);
        }
        if (this.text) {
            return this._renderText(data);
        }
        else {
            return this._renderElement(data);
        }
    }
    /**
     * Renders an HTML element out of the template.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderElement(data) {
        let node = data.node;
        if (!node) {
            node = data.node = document.createElementNS(this.ns || xhtmlNs, this.tag);
        }
        this._renderAttributes(data);
        this._renderElementChildren(data);
        this._setUpListeners(data);
        return node;
    }
    /**
     * Renders a text node out of {@link module:ui/template~Template#text}.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderText(data) {
        let node = data.node;
        // Save the original textContent to revert it in #revert().
        if (node) {
            data.revertData.text = node.textContent;
        }
        else {
            node = data.node = document.createTextNode('');
        }
        // Check if this Text Node is bound to Observable. Cases:
        //
        //		text: [ Template.bind( ... ).to( ... ) ]
        //
        //		text: [
        //			'foo',
        //			Template.bind( ... ).to( ... ),
        //			...
        //		]
        //
        if (hasTemplateBinding(this.text)) {
            this._bindToObservable({
                schema: this.text,
                updater: getTextUpdater(node),
                data
            });
        }
        // Simply set text. Cases:
        //
        //		text: [ 'all', 'are', 'static' ]
        //
        //		text: [ 'foo' ]
        //
        else {
            node.textContent = this.text.join('');
        }
        return node;
    }
    /**
     * Renders HTML element attributes out of {@link module:ui/template~Template#attributes}.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderAttributes(data) {
        if (!this.attributes) {
            return;
        }
        const node = data.node;
        const revertData = data.revertData;
        for (const attrName in this.attributes) {
            // Current attribute value in DOM.
            const domAttrValue = node.getAttribute(attrName);
            // The value to be set.
            const attrValue = this.attributes[attrName];
            // Save revert data.
            if (revertData) {
                revertData.attributes[attrName] = domAttrValue;
            }
            // Detect custom namespace:
            //
            //		class: {
            //			ns: 'abc',
            //			value: Template.bind( ... ).to( ... )
            //		}
            //
            const attrNs = isNamespaced(attrValue) ? attrValue[0].ns : null;
            // Activate binding if one is found. Cases:
            //
            //		class: [
            //			Template.bind( ... ).to( ... )
            //		]
            //
            //		class: [
            //			'bar',
            //			Template.bind( ... ).to( ... ),
            //			'baz'
            //		]
            //
            //		class: {
            //			ns: 'abc',
            //			value: Template.bind( ... ).to( ... )
            //		}
            //
            if (hasTemplateBinding(attrValue)) {
                // Normalize attributes with additional data like namespace:
                //
                //		class: {
                //			ns: 'abc',
                //			value: [ ... ]
                //		}
                //
                const valueToBind = isNamespaced(attrValue) ? attrValue[0].value : attrValue;
                // Extend the original value of attributes like "style" and "class",
                // don't override them.
                if (revertData && shouldExtend(attrName)) {
                    valueToBind.unshift(domAttrValue);
                }
                this._bindToObservable({
                    schema: valueToBind,
                    updater: getAttributeUpdater(node, attrName, attrNs),
                    data
                });
            }
            // Style attribute could be an Object so it needs to be parsed in a specific way.
            //
            //		style: {
            //			width: '100px',
            //			height: Template.bind( ... ).to( ... )
            //		}
            //
            else if (attrName == 'style' && typeof attrValue[0] !== 'string') {
                this._renderStyleAttribute(attrValue[0], data);
            }
            // Otherwise simply set the static attribute:
            //
            //		class: [ 'foo' ]
            //
            //		class: [ 'all', 'are', 'static' ]
            //
            //		class: [
            //			{
            //				ns: 'abc',
            //				value: [ 'foo' ]
            //			}
            //		]
            //
            else {
                // Extend the original value of attributes like "style" and "class",
                // don't override them.
                if (revertData && domAttrValue && shouldExtend(attrName)) {
                    attrValue.unshift(domAttrValue);
                }
                const value = attrValue
                    // Retrieve "values" from:
                    //
                    //		class: [
                    //			{
                    //				ns: 'abc',
                    //				value: [ ... ]
                    //			}
                    //		]
                    //
                    .map((val) => val ? (val.value || val) : val)
                    // Flatten the array.
                    .reduce((prev, next) => prev.concat(next), [])
                    // Convert into string.
                    .reduce(arrayValueReducer, '');
                if (!isFalsy(value)) {
                    node.setAttributeNS(attrNs, attrName, value);
                }
            }
        }
    }
    /**
     * Renders the `style` attribute of an HTML element based on
     * {@link module:ui/template~Template#attributes}.
     *
     * A style attribute is an {Object} with static values:
     *
     *		attributes: {
     *			style: {
     *				color: 'red'
     *			}
     *		}
     *
     * or values bound to {@link module:ui/model~Model} properties:
     *
     *		attributes: {
     *			style: {
     *				color: bind.to( ... )
     *			}
     *		}
     *
     * Note: The `style` attribute is rendered without setting the namespace. It does not seem to be
     * needed.
     *
     * @private
     * @param {Object} styles Styles located in `attributes.style` of {@link module:ui/template~TemplateDefinition}.
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderStyleAttribute(styles, data) {
        const node = data.node;
        for (const styleName in styles) {
            const styleValue = styles[styleName];
            // Cases:
            //
            //		style: {
            //			color: bind.to( 'attribute' )
            //		}
            //
            if (hasTemplateBinding(styleValue)) {
                this._bindToObservable({
                    schema: [styleValue],
                    updater: getStyleUpdater(node, styleName),
                    data
                });
            }
            // Cases:
            //
            //		style: {
            //			color: 'red'
            //		}
            //
            else {
                node.style[styleName] = styleValue;
            }
        }
    }
    /**
     * Recursively renders HTML element's children from {@link module:ui/template~Template#children}.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _renderElementChildren(data) {
        const node = data.node;
        const container = data.intoFragment ? document.createDocumentFragment() : node;
        const isApplying = data.isApplying;
        let childIndex = 0;
        for (const child of this.children) {
            if (isViewCollection(child)) {
                if (!isApplying) {
                    child.setParent(node);
                    // Note: ViewCollection renders its children.
                    for (const view of child) {
                        container.appendChild(view.element);
                    }
                }
            }
            else if (isView(child)) {
                if (!isApplying) {
                    if (!child.isRendered) {
                        child.render();
                    }
                    container.appendChild(child.element);
                }
            }
            else if (isNode(child)) {
                container.appendChild(child);
            }
            else {
                if (isApplying) {
                    const revertData = data.revertData;
                    const childRevertData = getEmptyRevertData();
                    revertData.children.push(childRevertData);
                    child._renderNode({
                        intoFragment: false,
                        node: container.childNodes[childIndex++],
                        isApplying: true,
                        revertData: childRevertData
                    });
                }
                else {
                    container.appendChild(child.render());
                }
            }
        }
        if (data.intoFragment) {
            node.appendChild(container);
        }
    }
    /**
     * Activates `on` event listeners from the {@link module:ui/template~TemplateDefinition}
     * on an HTML element.
     *
     * @protected
     * @param {module:ui/template~RenderData} data Rendering data.
     */
    _setUpListeners(data) {
        if (!this.eventListeners) {
            return;
        }
        for (const key in this.eventListeners) {
            const revertBindings = this.eventListeners[key].map(schemaItem => {
                const [domEvtName, domSelector] = key.split('@');
                return schemaItem.activateDomEventListener(domEvtName, domSelector, data);
            });
            if (data.revertData) {
                data.revertData.bindings.push(revertBindings);
            }
        }
    }
    /**
     * For a given {@link module:ui/template~TemplateValueSchema} containing {@link module:ui/template~TemplateBinding}
     * activates the binding and sets its initial value.
     *
     * Note: {@link module:ui/template~TemplateValueSchema} can be for HTML element attributes or
     * text node `textContent`.
     *
     * @protected
     * @param {Object} options Binding options.
     * @param {module:ui/template~TemplateValueSchema} options.schema
     * @param {Function} options.updater A function which updates the DOM (like attribute or text).
     * @param {module:ui/template~RenderData} options.data Rendering data.
     */
    _bindToObservable({ schema, updater, data }) {
        const revertData = data.revertData;
        // Set initial values.
        syncValueSchemaValue(schema, updater, data);
        const revertBindings = schema
            // Filter "falsy" (false, undefined, null, '') value schema components out.
            .filter(item => !isFalsy(item))
            // Filter inactive bindings from schema, like static strings ('foo'), numbers (42), etc.
            .filter((item) => item.observable)
            // Once only the actual binding are left, let the emitter listen to observable change:attribute event.
            // TODO: Reduce the number of listeners attached as many bindings may listen
            // to the same observable attribute.
            .map(templateBinding => templateBinding.activateAttributeListener(schema, updater, data));
        if (revertData) {
            revertData.bindings.push(revertBindings);
        }
    }
    /**
     * Reverts {@link module:ui/template~RenderData#revertData template data} from a node to
     * return it to the original state.
     *
     * @protected
     * @param {HTMLElement|Text} node A node to be reverted.
     * @param {Object} revertData An object that stores information about what changes have been made by
     * {@link #apply} to the node. See {@link module:ui/template~RenderData#revertData} for more information.
     */
    _revertTemplateFromNode(node, revertData) {
        for (const binding of revertData.bindings) {
            // Each binding may consist of several observable+observable#attribute.
            // like the following has 2:
            //
            //		class: [
            //			'x',
            //			bind.to( 'foo' ),
            //			'y',
            //			bind.to( 'bar' )
            //		]
            //
            for (const revertBinding of binding) {
                revertBinding();
            }
        }
        if (revertData.text) {
            node.textContent = revertData.text;
            return;
        }
        const element = node;
        for (const attrName in revertData.attributes) {
            const attrValue = revertData.attributes[attrName];
            // When the attribute has **not** been set before #apply().
            if (attrValue === null) {
                element.removeAttribute(attrName);
            }
            else {
                element.setAttribute(attrName, attrValue);
            }
        }
        for (let i = 0; i < revertData.children.length; ++i) {
            this._revertTemplateFromNode(element.childNodes[i], revertData.children[i]);
        }
    }
}
/**
 * Describes a binding created by the {@link module:ui/template~Template.bind} interface.
 *
 * @protected
 * @internal
 */
export class TemplateBinding {
    /**
     * Creates an instance of the {@link module:ui/template~TemplateBinding} class.
     *
     * @param {module:ui/template~TemplateDefinition} def The definition of the binding.
     */
    constructor(def) {
        this.attribute = def.attribute;
        this.observable = def.observable;
        this.emitter = def.emitter;
        this.callback = def.callback;
        /**
         * An observable instance of the binding. It either:
         *
         * * provides the attribute with the value,
         * * or passes the event when a corresponding DOM event is fired.
         *
         * @member {module:utils/observablemixin~ObservableMixin} module:ui/template~TemplateBinding#observable
         */
        /**
         * An {@link module:utils/emittermixin~Emitter} used by the binding to:
         *
         * * listen to the attribute change in the {@link module:ui/template~TemplateBinding#observable},
         * * or listen to the event in the DOM.
         *
         * @member {module:utils/emittermixin~EmitterMixin} module:ui/template~TemplateBinding#emitter
         */
        /**
         * The name of the {@link module:ui/template~TemplateBinding#observable observed attribute}.
         *
         * @member {String} module:ui/template~TemplateBinding#attribute
         */
        /**
         * A custom function to process the value of the {@link module:ui/template~TemplateBinding#attribute}.
         *
         * @member {Function} [module:ui/template~TemplateBinding#callback]
         */
    }
    /**
     * Returns the value of the binding. It is the value of the {@link module:ui/template~TemplateBinding#attribute} in
     * {@link module:ui/template~TemplateBinding#observable}. The value may be processed by the
     * {@link module:ui/template~TemplateBinding#callback}, if such has been passed to the binding.
     *
     * @param {Node} [node] A native DOM node, passed to the custom {@link module:ui/template~TemplateBinding#callback}.
     * @returns {*} The value of {@link module:ui/template~TemplateBinding#attribute} in
     * {@link module:ui/template~TemplateBinding#observable}.
     */
    getValue(node) {
        const value = this.observable[this.attribute];
        return this.callback ? this.callback(value, node) : value;
    }
    /**
     * Activates the listener which waits for changes of the {@link module:ui/template~TemplateBinding#attribute} in
     * {@link module:ui/template~TemplateBinding#observable}, then updates the DOM with the aggregated
     * value of {@link module:ui/template~TemplateValueSchema}.
     *
     * @param {module:ui/template~TemplateValueSchema} schema A full schema to generate an attribute or text in the DOM.
     * @param {Function} updater A DOM updater function used to update the native DOM attribute or text.
     * @param {module:ui/template~RenderData} data Rendering data.
     * @returns {Function} A function to sever the listener binding.
     */
    activateAttributeListener(schema, updater, data) {
        const callback = () => syncValueSchemaValue(schema, updater, data);
        this.emitter.listenTo(this.observable, `change:${this.attribute}`, callback);
        // Allows revert of the listener.
        return () => {
            this.emitter.stopListening(this.observable, `change:${this.attribute}`, callback);
        };
    }
}
/**
 * Describes either:
 *
 * * a binding to an {@link module:utils/observablemixin~Observable},
 * * or a native DOM event binding.
 *
 * It is created by the {@link module:ui/template~BindChain#to} method.
 *
 * @protected
 * @internal
 */
export class TemplateToBinding extends TemplateBinding {
    constructor(def) {
        super(def);
        this.eventNameOrFunction = def.eventNameOrFunction;
    }
    /**
     * Activates the listener for the native DOM event, which when fired, is propagated by
     * the {@link module:ui/template~TemplateBinding#emitter}.
     *
     * @param {String} domEvtName The name of the native DOM event.
     * @param {String} domSelector The selector in the DOM to filter delegated events.
     * @param {module:ui/template~RenderData} data Rendering data.
     * @returns {Function} A function to sever the listener binding.
     */
    activateDomEventListener(domEvtName, domSelector, data) {
        const callback = (evt, domEvt) => {
            if (!domSelector || domEvt.target.matches(domSelector)) {
                if (typeof this.eventNameOrFunction == 'function') {
                    this.eventNameOrFunction(domEvt);
                }
                else {
                    this.observable.fire(this.eventNameOrFunction, domEvt);
                }
            }
        };
        this.emitter.listenTo(data.node, domEvtName, callback);
        // Allows revert of the listener.
        return () => {
            this.emitter.stopListening(data.node, domEvtName, callback);
        };
    }
}
/**
 * Describes a binding to {@link module:utils/observablemixin~ObservableMixin} created by the {@link module:ui/template~BindChain#if}
 * method.
 *
 * @protected
 * @internal
 */
export class TemplateIfBinding extends TemplateBinding {
    constructor(def) {
        super(def);
        this.valueIfTrue = def.valueIfTrue;
    }
    /**
     * @inheritDoc
     */
    getValue(node) {
        const value = super.getValue(node);
        return isFalsy(value) ? false : (this.valueIfTrue || true);
    }
}
// Checks whether given {@link module:ui/template~TemplateValueSchema} contains a
// {@link module:ui/template~TemplateBinding}.
//
// @param {module:ui/template~TemplateValueSchema} schema
// @returns {Boolean}
function hasTemplateBinding(schema) {
    if (!schema) {
        return false;
    }
    // Normalize attributes with additional data like namespace:
    //
    //		class: {
    //			ns: 'abc',
    //			value: [ ... ]
    //		}
    //
    if (schema.value) {
        schema = schema.value;
    }
    if (Array.isArray(schema)) {
        return schema.some(hasTemplateBinding);
    }
    else if (schema instanceof TemplateBinding) {
        return true;
    }
    return false;
}
// Assembles the value using {@link module:ui/template~TemplateValueSchema} and stores it in a form of
// an Array. Each entry of the Array corresponds to one of {@link module:ui/template~TemplateValueSchema}
// items.
//
// @param {module:ui/template~TemplateValueSchema} schema
// @param {Node} node DOM Node updated when {@link module:utils/observablemixin~ObservableMixin} changes.
// @returns {Array}
function getValueSchemaValue(schema, node) {
    return schema.map(schemaItem => {
        // Process {@link module:ui/template~TemplateBinding} bindings.
        if (schemaItem instanceof TemplateBinding) {
            return schemaItem.getValue(node);
        }
        // All static values like strings, numbers, and "falsy" values (false, null, undefined, '', etc.) just pass.
        return schemaItem;
    });
}
// A function executed each time the bound Observable attribute changes, which updates the DOM with a value
// constructed from {@link module:ui/template~TemplateValueSchema}.
//
// @param {module:ui/template~TemplateValueSchema} schema
// @param {Function} updater A function which updates the DOM (like attribute or text).
// @param {Node} node DOM Node updated when {@link module:utils/observablemixin~ObservableMixin} changes.
function syncValueSchemaValue(schema, updater, { node }) {
    const values = getValueSchemaValue(schema, node);
    let value;
    // Check if schema is a single Template.bind.if, like:
    //
    //		class: Template.bind.if( 'foo' )
    //
    if (schema.length == 1 && schema[0] instanceof TemplateIfBinding) {
        value = values[0];
    }
    else {
        value = values.reduce(arrayValueReducer, '');
    }
    if (isFalsy(value)) {
        updater.remove();
    }
    else {
        updater.set(value);
    }
}
// Returns an object consisting of `set` and `remove` functions, which
// can be used in the context of DOM Node to set or reset `textContent`.
// @see module:ui/view~View#_bindToObservable
//
// @param {Node} node DOM Node to be modified.
// @returns {Object}
function getTextUpdater(node) {
    return {
        set(value) {
            node.textContent = value;
        },
        remove() {
            node.textContent = '';
        }
    };
}
// Returns an object consisting of `set` and `remove` functions, which
// can be used in the context of DOM Node to set or reset an attribute.
// @see module:ui/view~View#_bindToObservable
//
// @param {Node} node DOM Node to be modified.
// @param {String} attrName Name of the attribute to be modified.
// @param {String} [ns=null] Namespace to use.
// @returns {Object}
function getAttributeUpdater(el, attrName, ns) {
    return {
        set(value) {
            el.setAttributeNS(ns, attrName, value);
        },
        remove() {
            el.removeAttributeNS(ns, attrName);
        }
    };
}
// Returns an object consisting of `set` and `remove` functions, which
// can be used in the context of CSSStyleDeclaration to set or remove a style.
// @see module:ui/view~View#_bindToObservable
//
// @param {Node} node DOM Node to be modified.
// @param {String} styleName Name of the style to be modified.
// @returns {Object}
function getStyleUpdater(el, styleName) {
    return {
        set(value) {
            el.style[styleName] = value;
        },
        remove() {
            el.style[styleName] = null;
        }
    };
}
// Clones definition of the template.
//
// @param {module:ui/template~TemplateDefinition} def
// @returns {module:ui/template~TemplateDefinition}
function clone(def) {
    const clone = cloneDeepWith(def, value => {
        // Don't clone the `Template.bind`* bindings because of the references to Observable
        // and DomEmitterMixin instances inside, which would also be traversed and cloned by greedy
        // cloneDeepWith algorithm. There's no point in cloning Observable/DomEmitterMixins
        // along with the definition.
        //
        // Don't clone Template instances if provided as a child. They're simply #render()ed
        // and nothing should interfere.
        //
        // Also don't clone View instances if provided as a child of the Template. The template
        // instance will be extracted from the View during the normalization and there's no need
        // to clone it.
        if (value && (value instanceof TemplateBinding || isTemplate(value) || isView(value) || isViewCollection(value))) {
            return value;
        }
    });
    return clone;
}
// Normalizes given {@link module:ui/template~TemplateDefinition}.
//
// See:
//  * {@link normalizeAttributes}
//  * {@link normalizeListeners}
//  * {@link normalizePlainTextDefinition}
//  * {@link normalizeTextDefinition}
//
// @param {module:ui/template~TemplateDefinition} def
// @returns {module:ui/template~TemplateDefinition} Normalized definition.
function normalize(def) {
    if (typeof def == 'string') {
        def = normalizePlainTextDefinition(def);
    }
    else if (def.text) {
        normalizeTextDefinition(def);
    }
    if (def.on) {
        def.eventListeners = normalizeListeners(def.on);
        // Template mixes EmitterMixin, so delete #on to avoid collision.
        delete def.on;
    }
    if (!def.text) {
        if (def.attributes) {
            normalizeAttributes(def.attributes);
        }
        const children = [];
        if (def.children) {
            if (isViewCollection(def.children)) {
                children.push(def.children);
            }
            else {
                for (const child of def.children) {
                    if (isTemplate(child) || isView(child) || isNode(child)) {
                        children.push(child);
                    }
                    else {
                        children.push(new Template(child));
                    }
                }
            }
        }
        def.children = children;
    }
    return def;
}
// Normalizes "attributes" section of {@link module:ui/template~TemplateDefinition}.
//
//		attributes: {
//			a: 'bar',
//			b: {@link module:ui/template~TemplateBinding},
//			c: {
//				value: 'bar'
//			}
//		}
//
// becomes
//
//		attributes: {
//			a: [ 'bar' ],
//			b: [ {@link module:ui/template~TemplateBinding} ],
//			c: {
//				value: [ 'bar' ]
//			}
//		}
//
// @param {Object} attributes
function normalizeAttributes(attributes) {
    for (const a in attributes) {
        if (attributes[a].value) {
            attributes[a].value = toArray(attributes[a].value);
        }
        arrayify(attributes, a);
    }
}
// Normalizes "on" section of {@link module:ui/template~TemplateDefinition}.
//
//		on: {
//			a: 'bar',
//			b: {@link module:ui/template~TemplateBinding},
//			c: [ {@link module:ui/template~TemplateBinding}, () => { ... } ]
//		}
//
// becomes
//
//		on: {
//			a: [ 'bar' ],
//			b: [ {@link module:ui/template~TemplateBinding} ],
//			c: [ {@link module:ui/template~TemplateBinding}, () => { ... } ]
//		}
//
// @param {Object} listeners
// @returns {Object} Object containing normalized listeners.
function normalizeListeners(listeners) {
    for (const l in listeners) {
        arrayify(listeners, l);
    }
    return listeners;
}
// Normalizes "string" {@link module:ui/template~TemplateDefinition}.
//
//		"foo"
//
// becomes
//
//		{ text: [ 'foo' ] },
//
// @param {String} def
// @returns {module:ui/template~TemplateDefinition} Normalized template definition.
function normalizePlainTextDefinition(def) {
    return {
        text: [def]
    };
}
// Normalizes text {@link module:ui/template~TemplateDefinition}.
//
//		children: [
//			{ text: 'def' },
//			{ text: {@link module:ui/template~TemplateBinding} }
//		]
//
// becomes
//
//		children: [
//			{ text: [ 'def' ] },
//			{ text: [ {@link module:ui/template~TemplateBinding} ] }
//		]
//
// @param {module:ui/template~TemplateDefinition} def
function normalizeTextDefinition(def) {
    def.text = toArray(def.text);
}
// Wraps an entry in Object in an Array, if not already one.
//
//		{
//			x: 'y',
//			a: [ 'b' ]
//		}
//
// becomes
//
//		{
//			x: [ 'y' ],
//			a: [ 'b' ]
//		}
//
// @param {Object} obj
// @param {String} key
function arrayify(obj, key) {
    obj[key] = toArray(obj[key]);
}
// A helper which concatenates the value avoiding unwanted
// leading white spaces.
//
// @param {String} prev
// @param {String} cur
// @returns {String}
function arrayValueReducer(prev, cur) {
    if (isFalsy(cur)) {
        return prev;
    }
    else if (isFalsy(prev)) {
        return cur;
    }
    else {
        return `${prev} ${cur}`;
    }
}
// Extends one object defined in the following format:
//
//		{
//			key1: [Array1],
//			key2: [Array2],
//			...
//			keyN: [ArrayN]
//		}
//
// with another object of the same data format.
//
// @param {Object} obj Base object.
// @param {Object} ext Object extending base.
// @returns {String}
function extendObjectValueArray(obj, ext) {
    for (const a in ext) {
        if (obj[a]) {
            obj[a].push(...ext[a]);
        }
        else {
            obj[a] = ext[a];
        }
    }
}
// A helper for {@link module:ui/template~Template#extend}. Recursively extends {@link module:ui/template~Template} instance
// with content from {@link module:ui/template~TemplateDefinition}. See {@link module:ui/template~Template#extend} to learn more.
//
// @param {module:ui/template~Template} def A template instance to be extended.
// @param {module:ui/template~TemplateDefinition} def A definition which is to extend the template instance.
// @param {Object} Error context.
function extendTemplate(template, def) {
    if (def.attributes) {
        if (!template.attributes) {
            template.attributes = {};
        }
        extendObjectValueArray(template.attributes, def.attributes);
    }
    if (def.eventListeners) {
        if (!template.eventListeners) {
            template.eventListeners = {};
        }
        extendObjectValueArray(template.eventListeners, def.eventListeners);
    }
    if (def.text) {
        template.text.push(...def.text);
    }
    if (def.children && def.children.length) {
        if (template.children.length != def.children.length) {
            /**
             * The number of children in extended definition does not match.
             *
             * @error ui-template-extend-children-mismatch
             */
            throw new CKEditorError('ui-template-extend-children-mismatch', template);
        }
        let childIndex = 0;
        for (const childDef of def.children) {
            extendTemplate(template.children[childIndex++], childDef);
        }
    }
}
// Checks if value is "falsy".
// Note: 0 (Number) is not "falsy" in this context.
//
// @private
// @param {*} value Value to be checked.
function isFalsy(value) {
    return !value && value !== 0;
}
// Checks if the item is an instance of {@link module:ui/view~View}
//
// @private
// @param {*} value Value to be checked.
function isView(item) {
    return item instanceof View;
}
// Checks if the item is an instance of {@link module:ui/template~Template}
//
// @private
// @param {*} value Value to be checked.
function isTemplate(item) {
    return item instanceof Template;
}
// Checks if the item is an instance of {@link module:ui/viewcollection~ViewCollection}
//
// @private
// @param {*} value Value to be checked.
function isViewCollection(item) {
    return item instanceof ViewCollection;
}
// Checks if value array contains the one with namespace.
function isNamespaced(attrValue) {
    return isObject(attrValue[0]) && attrValue[0].ns;
}
// Creates an empty skeleton for {@link module:ui/template~Template#revert}
// data.
//
// @private
function getEmptyRevertData() {
    return {
        children: [],
        bindings: [],
        attributes: {}
    };
}
// Checks whether an attribute should be extended when
// {@link module:ui/template~Template#apply} is called.
//
// @private
// @param {String} attrName Attribute name to check.
function shouldExtend(attrName) {
    return attrName == 'class' || attrName == 'style';
}
/**
 * Tells {@link module:ui/template~Template#_renderNode} to render
 * children into `DocumentFragment` first and then append the fragment
 * to the parent element. It is a speed optimization.
 *
 * @member {Boolean} #intoFragment
 */
/**
 * A node which is being rendered.
 *
 * @member {HTMLElement|Text} #node
 */
/**
 * Indicates whether the {@module:ui/template~RenderNodeOptions#node} has
 * been provided by {@module:ui/template~Template#apply}.
 *
 * @member {Boolean} #isApplying
 */
/**
 * An object storing the data that helps {@module:ui/template~Template#revert}
 * bringing back an element to its initial state, i.e. before
 * {@module:ui/template~Template#apply} was called.
 *
 * @member {Object} #revertData
 */
