import { API, BlockAPI, BlockTool, ToolConfig, SanitizerConfig, ConversionConfig } from '@editorjs/editorjs';
import { MenuConfig } from '@editorjs/editorjs/types/tools';

/**
 * Quote Tool`s initial configuration
 */
export interface QuoteConfig extends ToolConfig {
    /**
     * Placeholder text to display in the quote's text input.
     */
    quotePlaceholder?: string;
    /**
     * Placeholder text to display in the quote's caption input.
     */
    captionPlaceholder?: string;
    /**
     * Default alignment for the quote.
     */
    defaultAlignment?: Alignment;
}
/**
 * Quote Tool`s input and output data
 */
export interface QuoteData {
    /**
     * The text of the quote.
     */
    text: string;
    /**
     * The caption for the quote.
     */
    caption: string;
    /**
     * The alignment of the quote.
     */
    alignment: Alignment;
}
/**
 * Constructor params for the Quote tool, use to pass initial data and settings
 */
interface QuoteParams {
    /**
     * Initial data for the quote
     */
    data: QuoteData;
    /**
     * Quote tool configuration
     */
    config?: QuoteConfig;
    /**
     * Editor.js API
     */
    api: API;
    /**
     * Is quote read-only.
     */
    readOnly: boolean;
    /**
     * BlockAPI object of Quote.
     */
    block: BlockAPI;
}
/**
 * CSS classes names
 */
interface QuoteCSS {
    /**
     * Editor.js CSS Class for block
     */
    baseClass: string;
    /**
     * Quote CSS Class
     */
    wrapper: string;
    /**
     * Quote CSS Class
     */
    input: string;
    /**
     * Quote CSS Class
     */
    text: string;
    /**
     * Quote CSS Class
     */
    caption: string;
}
/**
 * Enum for Quote Alignment
 */
declare enum Alignment {
    /**
     * Left alignment
     */
    Left = "left",
    /**
     * Center alignment
     */
    Center = "center"
}
/**
 * Quote Tool for Editor.js
 */
export default class Quote implements BlockTool {
    /**
     * The Editor.js API
     */
    private api;
    /**
     * Is Quote Tool read-only
     */
    private readOnly;
    /**
     * Placeholder for Quote Tool
     */
    private quotePlaceholder;
    /**
     * Current quote element
     */
    private block;
    /**
     * Caption placeholder for Quote Tool
     */
    private captionPlaceholder;
    /**
     * Quote Tool's data
     */
    private data;
    /**
     * Quote Tool's CSS classes
     */
    private css;
    /**
     * Render plugin`s main Element and fill it with saved data
     * @param params - Quote Tool constructor params
     * @param params.data - previously saved data
     * @param params.config - user config for Tool
     * @param params.api - editor.js api
     * @param params.readOnly - read only mode flag
     */
    constructor({ data, config, api, readOnly, block }: QuoteParams);
    /**
     * Notify core that read-only mode is supported
     * @returns true
     */
    static get isReadOnlySupported(): boolean;
    /**
     * Get Tool toolbox settings
     * icon - Tool icon's SVG
     * title - title to show in toolbox
     * @returns icon and title of the toolbox
     */
    static get toolbox(): {
        /**
         * Tool icon's SVG
         */
        icon: string;
        /**
         * title to show in toolbox
         */
        title: 'Quote';
    };
    /**
     * Empty Quote is not empty Block
     * @returns true
     */
    static get contentless(): boolean;
    /**
     * Allow to press Enter inside the Quote
     * @returns true
     */
    static get enableLineBreaks(): boolean;
    /**
     * Default placeholder for quote text
     * @returns 'Enter a quote'
     */
    static get DEFAULT_QUOTE_PLACEHOLDER(): string;
    /**
     * Default placeholder for quote caption
     * @returns 'Enter a caption'
     */
    static get DEFAULT_CAPTION_PLACEHOLDER(): string;
    /**
     * Default quote alignment
     * @returns Alignment.Left
     */
    static get DEFAULT_ALIGNMENT(): Alignment;
    /**
     * Allow Quote to be converted to/from other blocks
     * @returns conversion config object
     */
    static get conversionConfig(): ConversionConfig;
    /**
     * Tool`s styles
     * @returns CSS classes names
     */
    get CSS(): QuoteCSS;
    /**
     * Tool`s settings properties
     * @returns settings properties
     */
    get settings(): {
        /**
         * Alignment name
         */
        name: Alignment;
        /**
         * Alignment icon
         */
        icon: string;
    }[];
    /**
     * Create Quote Tool container with inputs
     * @returns blockquote DOM element - Quote Tool container
     */
    render(): HTMLElement;
    /**
     * Extract Quote data from Quote Tool element
     * @param quoteElement - Quote DOM element to save
     * @returns Quote data object
     */
    save(quoteElement: HTMLDivElement): QuoteData;
    /**
     * Sanitizer rules
     * @returns sanitizer rules
     */
    static get sanitize(): SanitizerConfig;
    /**
     * Create wrapper for Tool`s settings buttons:
     * 1. Left alignment
     * 2. Center alignment
     * @returns settings menu
     */
    renderSettings(): HTMLElement | MenuConfig;
    /**
     * Toggle quote`s alignment
     * @param tune - alignment
     */
    private _toggleTune;
}
export {};
