/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/* eslint-disable @typescript-eslint/no-invalid-void-type */
/**
 * @module core/plugin
 */
import { ObservableMixin } from '@ckeditor/ckeditor5-utils';
/**
 * The base class for CKEditor plugin classes.
 *
 * @implements module:core/plugin~PluginInterface
 * @mixes module:utils/observablemixin~ObservableMixin
 */
export default class Plugin extends ObservableMixin() {
    /**
     * @inheritDoc
     */
    constructor(editor) {
        super();
        /**
         * The editor instance.
         *
         * Note that most editors implement the {@link module:core/editor/editorwithui~EditorWithUI} interface in addition
         * to the base {@link module:core/editor/editor~Editor} interface. However, editors with an external UI
         * (i.e. Bootstrap-based) or a headless editor may not implement the {@link module:core/editor/editorwithui~EditorWithUI}
         * interface.
         *
         * Because of above, to make plugins more universal, it is recommended to split features into:
         *  - The "editing" part that only uses the {@link module:core/editor/editor~Editor} interface.
         *  - The "UI" part that uses both the {@link module:core/editor/editor~Editor} interface and
         *  the {@link module:core/editor/editorwithui~EditorWithUI} interface.
         *
         * @readonly
         * @member {module:core/editor/editor~Editor} #editor
         */
        this.editor = editor;
        /**
         * Flag indicating whether a plugin is enabled or disabled.
         * A disabled plugin will not transform text.
         *
         * Plugin can be simply disabled like that:
         *
         *		// Disable the plugin so that no toolbars are visible.
         *		editor.plugins.get( 'TextTransformation' ).isEnabled = false;
         *
         * You can also use {@link #forceDisabled} method.
         *
         * @observable
         * @readonly
         * @member {Boolean} #isEnabled
         */
        this.set('isEnabled', true);
        /**
         * Holds identifiers for {@link #forceDisabled} mechanism.
         *
         * @type {Set.<String>}
         * @private
         */
        this._disableStack = new Set();
    }
    /**
     * Disables the plugin.
     *
     * Plugin may be disabled by multiple features or algorithms (at once). When disabling a plugin, unique id should be passed
     * (e.g. feature name). The same identifier should be used when {@link #clearForceDisabled enabling back} the plugin.
     * The plugin becomes enabled only after all features {@link #clearForceDisabled enabled it back}.
     *
     * Disabling and enabling a plugin:
     *
     *		plugin.isEnabled; // -> true
     *		plugin.forceDisabled( 'MyFeature' );
     *		plugin.isEnabled; // -> false
     *		plugin.clearForceDisabled( 'MyFeature' );
     *		plugin.isEnabled; // -> true
     *
     * Plugin disabled by multiple features:
     *
     *		plugin.forceDisabled( 'MyFeature' );
     *		plugin.forceDisabled( 'OtherFeature' );
     *		plugin.clearForceDisabled( 'MyFeature' );
     *		plugin.isEnabled; // -> false
     *		plugin.clearForceDisabled( 'OtherFeature' );
     *		plugin.isEnabled; // -> true
     *
     * Multiple disabling with the same identifier is redundant:
     *
     *		plugin.forceDisabled( 'MyFeature' );
     *		plugin.forceDisabled( 'MyFeature' );
     *		plugin.clearForceDisabled( 'MyFeature' );
     *		plugin.isEnabled; // -> true
     *
     * **Note:** some plugins or algorithms may have more complex logic when it comes to enabling or disabling certain plugins,
     * so the plugin might be still disabled after {@link #clearForceDisabled} was used.
     *
     * @param {String} id Unique identifier for disabling. Use the same id when {@link #clearForceDisabled enabling back} the plugin.
     */
    forceDisabled(id) {
        this._disableStack.add(id);
        if (this._disableStack.size == 1) {
            this.on('set:isEnabled', forceDisable, { priority: 'highest' });
            this.isEnabled = false;
        }
    }
    /**
     * Clears forced disable previously set through {@link #forceDisabled}. See {@link #forceDisabled}.
     *
     * @param {String} id Unique identifier, equal to the one passed in {@link #forceDisabled} call.
     */
    clearForceDisabled(id) {
        this._disableStack.delete(id);
        if (this._disableStack.size == 0) {
            this.off('set:isEnabled', forceDisable);
            this.isEnabled = true;
        }
    }
    /**
     * @inheritDoc
     */
    destroy() {
        this.stopListening();
    }
    /**
     * @inheritDoc
     */
    static get isContextPlugin() {
        return false;
    }
}
// Helper function that forces plugin to be disabled.
function forceDisable(evt) {
    evt.return = false;
    evt.stop();
}
