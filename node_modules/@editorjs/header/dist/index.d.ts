import { API, BlockTune, PasteEvent } from '@editorjs/editorjs';

/**
* @description Tool's input and output data format
*/
export interface HeaderData {
    /** Header's content */
    text: string;
    /** Header's level from 1 to 6 */
    level: number;
}
/**
 * @description Tool's config from Editor
 */
export interface HeaderConfig {
    /** Block's placeholder */
    placeholder?: string;
    /** Heading levels */
    levels?: number[];
    /** Default level */
    defaultLevel?: number;
}
/**
 * @description Heading level information
 */
interface Level {
    /** Level number */
    number: number;
    /** HTML tag corresponding with level number */
    tag: string;
    /** Icon */
    svg: string;
}
/**
 * @description Constructor arguments for Header
 */
interface ConstructorArgs {
    /** Previously saved data */
    data: HeaderData | {};
    /** User config for the tool */
    config: HeaderConfig;
    /** Editor.js API */
    api: API;
    /** Read-only mode flag */
    readOnly: boolean;
}
/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */
export default class Header {
    /**
     * Render plugin`s main Element and fill it with saved data
     *
     * @param {{data: HeaderData, config: HeaderConfig, api: object}}
     *   data — previously saved data
     *   config - user config for Tool
     *   api - Editor.js API
     *   readOnly - read only mode flag
     */
    /**
     * Editor.js API
    * @private
    */
    private api;
    /**
    * Read-only mode flag
    * @private
    */
    private readOnly;
    /**
    * Tool's settings passed from Editor
    * @private
    */
    private _settings;
    /**
    * Block's data
    * @private
    */
    private _data;
    /**
    * Main Block wrapper
    * @private
    */
    private _element;
    constructor({ data, config, api, readOnly }: ConstructorArgs);
    /**
     * Styles
     */
    private get _CSS();
    /**
     * Check if data is valid
     *
     * @param {any} data - data to check
     * @returns {data is HeaderData}
     * @private
     */
    isHeaderData(data: any): data is HeaderData;
    /**
     * Normalize input data
     *
     * @param {HeaderData} data - saved data to process
     *
     * @returns {HeaderData}
     * @private
     */
    normalizeData(data: HeaderData | {}): HeaderData;
    /**
     * Return Tool's view
     *
     * @returns {HTMLHeadingElement}
     * @public
     */
    render(): HTMLHeadingElement;
    /**
     * Returns header block tunes config
     *
     * @returns {Array}
     */
    renderSettings(): BlockTune[];
    /**
     * Callback for Block's settings buttons
     *
     * @param {number} level - level to set
     */
    setLevel(level: number): void;
    /**
     * Method that specified how to merge two Text blocks.
     * Called by Editor.js by backspace at the beginning of the Block
     *
     * @param {HeaderData} data - saved data to merger with current block
     * @public
     */
    merge(data: HeaderData): void;
    /**
     * Validate Text block data:
     * - check for emptiness
     *
     * @param {HeaderData} blockData — data received after saving
     * @returns {boolean} false if saved data is not correct, otherwise true
     * @public
     */
    validate(blockData: HeaderData): boolean;
    /**
     * Extract Tool's data from the view
     *
     * @param {HTMLHeadingElement} toolsContent - Text tools rendered view
     * @returns {HeaderData} - saved data
     * @public
     */
    save(toolsContent: HTMLHeadingElement): HeaderData;
    /**
     * Allow Header to be converted to/from other blocks
     */
    static get conversionConfig(): {
        export: string;
        import: string;
    };
    /**
     * Sanitizer Rules
     */
    static get sanitize(): {
        level: boolean;
        text: {};
    };
    /**
     * Returns true to notify core that read-only is supported
     *
     * @returns {boolean}
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Get current Tools`s data
     *
     * @returns {HeaderData} Current data
     * @private
     */
    get data(): HeaderData;
    /**
     * Store data in plugin:
     * - at the this._data property
     * - at the HTML
     *
     * @param {HeaderData} data — data to set
     * @private
     */
    set data(data: HeaderData);
    /**
     * Get tag for target level
     * By default returns second-leveled header
     *
     * @returns {HTMLElement}
     */
    getTag(): HTMLHeadingElement;
    /**
     * Get current level
     *
     * @returns {level}
     */
    get currentLevel(): Level;
    /**
     * Return default level
     *
     * @returns {level}
     */
    get defaultLevel(): Level;
    /**
     * @typedef {object} level
     * @property {number} number - level number
     * @property {string} tag - tag corresponds with level number
     * @property {string} svg - icon
     */
    /**
     * Available header levels
     *
     * @returns {level[]}
     */
    get levels(): Level[];
    /**
     * Handle H1-H6 tags on paste to substitute it with header Tool
     *
     * @param {PasteEvent} event - event with pasted content
     */
    onPaste(event: PasteEvent): void;
    /**
     * Used by Editor.js paste handling API.
     * Provides configuration to handle H1-H6 tags.
     *
     * @returns {{handler: (function(HTMLElement): {text: string}), tags: string[]}}
     */
    static get pasteConfig(): {
        tags: string[];
    };
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     *
     * @returns {{icon: string, title: string}}
     */
    static get toolbox(): {
        icon: any;
        title: string;
    };
}
export {};
