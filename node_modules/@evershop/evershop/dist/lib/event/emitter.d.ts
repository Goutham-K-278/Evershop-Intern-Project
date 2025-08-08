/**
 * Emit an event, this is used to trigger actions when an event occurs
 * @param name - The name of the event
 * @param data - The data to emit
 */
export declare function emit(name: string, data: Record<string, any>): Promise<void>;
