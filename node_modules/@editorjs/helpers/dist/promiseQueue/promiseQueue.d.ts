/**
 * Class allows to make a queue of async jobs and wait until they all will be finished one by one
 * @example const queue = new PromiseQueue();
 *            queue.add(async () => { ... });
 *            queue.add(async () => { ... });
 *            await queue.completed;
 */
export declare class PromiseQueue {
    /**
     * Queue of promises to be executed
     */
    completed: Promise<void>;
    /**
     * Add new promise to queue
     * @param operation - promise should be added to queue
     */
    add(operation: (value: void) => void | PromiseLike<void>): Promise<void>;
}
