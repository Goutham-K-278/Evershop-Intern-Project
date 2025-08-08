import type { Event } from './watchHandler.js';
/**
 * Deduplicates a list of paths, keeping only the top-most created folders.
 * @param {Array<{ path: string, type: string }>} entries
 * @returns {Event[]} Top-level unique root folders
 */
export declare function getRootPaths(entries: Event[]): Event[];
