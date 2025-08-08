import { PathLike } from 'node:fs';
/**
 * Reads a JSON file and parses its content into an object.
 *
 * @param {PathLike} path - The path to the JSON file.
 * @returns {T} - The parsed object from the JSON file.
 * @throws {Error} - If the file cannot be read or the content is not valid JSON.
 */
export declare function jsonParse<T>(path: PathLike): T;
