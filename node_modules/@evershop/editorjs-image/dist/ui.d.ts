import { API } from '@editorjs/editorjs';
import { ImageToolData, ImageConfig } from './types/types';

/**
 * Nodes interface representing various elements in the UI.
 */
interface Nodes {
    /**
     * Wrapper element in the UI.
     */
    wrapper: HTMLElement;
    /**
     * Container for the image element in the UI.
     */
    imageContainer: HTMLElement;
    /**
     * Button for selecting files.
     */
    fileButton: HTMLElement;
    /**
     * Represents the image element in the UI, if one is present; otherwise, it's undefined.
     */
    imageEl?: HTMLElement;
    /**
     * Preloader element for the image.
     */
    imagePreloader: HTMLElement;
    /**
     * Caption element for the image.
     */
    caption: HTMLElement;
    /**
     * Url element for the image.
     */
    url: HTMLElement;
}
/**
 * ConstructorParams interface representing parameters for the Ui class constructor.
 */
interface ConstructorParams {
    /**
     * Editor.js API.
     */
    api: API;
    /**
     * Configuration for the image.
     */
    config: ImageConfig;
    /**
     * Callback function for selecting a file.
     */
    onSelectFile: () => void;
    /**
     * Flag indicating if the UI is in read-only mode.
     */
    readOnly: boolean;
}
/**
 * Class for working with UI:
 *  - rendering base structure
 *  - show/hide preview
 *  - apply tune view
 */
export default class Ui {
    /**
     * Nodes representing various elements in the UI.
     */
    nodes: Nodes;
    /**
     * API instance for Editor.js.
     */
    private api;
    /**
     * Configuration for the image tool.
     */
    private config;
    /**
     * Callback function for selecting a file.
     */
    private onSelectFile;
    /**
     * Flag indicating if the UI is in read-only mode.
     */
    private readOnly;
    /**
     * @param ui - image tool Ui module
     * @param ui.api - Editor.js API
     * @param ui.config - user config
     * @param ui.onSelectFile - callback for clicks on Select file button
     * @param ui.readOnly - read-only mode flag
     */
    constructor({ api, config, onSelectFile, readOnly }: ConstructorParams);
    /**
     * Apply visual representation of activated tune
     * @param tuneName - one of available tunes {@link Tunes.tunes}
     * @param status - true for enable, false for disable
     */
    applyTune(tuneName: string, status: boolean): void;
    /**
     * Renders tool UI
     * @param toolData - saved tool data
     */
    render(toolData: ImageToolData): HTMLElement;
    /**
     * Shows uploading preloader
     * @param src - preview source
     */
    showPreloader(src: string): void;
    /**
     * Hide uploading preloader
     */
    hidePreloader(): void;
    /**
     * Shows an image
     * @param url - image source
     */
    fillImage(url: string): void;
    /**
     * Shows caption input
     * @param text - caption content text
     */
    fillCaption(text: string): void;
    /**
     * Shows url input
     * @param text - caption content text
     */
    fillUrl(text: string): void;
    /**
     * CSS classes
     */
    private get CSS();
    /**
     * Creates upload-file button
     */
    private createFileButton;
    /**
     * Changes UI status
     * @param status - see {@link Ui.status} constants
     */
    private toggleStatus;
}
export {};
