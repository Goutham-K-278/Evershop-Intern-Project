import { Widget } from '../../types/widget.js';
/**
 * Retrieves all registered widgets. This function returns a new array containing
 * all widgets, each with its `settingComponentKey` and `componentKey` properties
 * generated using the `generateComponentKey` function.
 * Calling this function will also freeze the widget manager, preventing any further mutations (register, remove, update).
 * @returns {Widget[]} An array of all registered widgets.
 */
export declare function getAllWidgets(): Widget[];
/**
 * Retrieves all enabled widgets. An enabled widget is one that has its `enabled` property set to true.
 * This function returns a new array containing only the widgets that are enabled. Calling this function
 * will also freeze the widget manager, preventing any further mutations (register, remove, update).
 * @returns {Widget[]} An array of enabled widgets.
 */
export declare function getEnabledWidgets(): Widget[];
/**
 * Registers a new widget. This function is intended to be called during the
 * bootstrap phase of the application, before the widget manager is frozen.
 * @param widget - The widget object to register.
 * @returns True if the widget was successfully registered, false otherwise.
 * @throws Error if the widget is invalid or if the manager is in a read-only state.
 */
export declare function registerWidget(widget: Widget): boolean;
/**
 * Updates properties of an existing widget. This is useful for third-party extensions
 * to modify or "overwrite" parts of a core widget, such as its `settingComponent` or `component`.
 * @param widgetType - The type of the widget to update.
 * @param updates - An object containing the properties to update.
 * @returns True if the widget was successfully updated, false otherwise.
 */
export declare function updateWidget(widgetType: string, updates: Partial<Widget>): boolean;
/**
 * Removes a widget. This function supposed to be called from the bootstrap
 * phase of the application, before the widget manager is frozen.
 * @param widgetName - The name of the widget to remove.
 * @returns True if the widget was successfully removed, false otherwise.
 */
export declare function removeWidget(widgetName: string): boolean;
/**
 * Retrieves a widget by its type.
 * @param widgetType - The type of the widget to retrieve.
 * @returns The widget if found, undefined otherwise.
 */
export declare function getWidget(widgetType: string): Widget | undefined;
/**
 * Checks if a widget with the given type is registered.
 * @param widgetType - The type of the widget to check.
 * @returns True if the widget is registered, false otherwise.
 */
export declare function hasWidget(widgetType: string): boolean;
