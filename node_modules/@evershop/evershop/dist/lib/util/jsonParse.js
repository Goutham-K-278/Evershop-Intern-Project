import { readFileSync } from 'node:fs';
/**
 * Reads a JSON file and parses its content into an object.
 *
 * @param {PathLike} path - The path to the JSON file.
 * @returns {T} - The parsed object from the JSON file.
 * @throws {Error} - If the file cannot be read or the content is not valid JSON.
 */
export function jsonParse(path) {
    try {
        return JSON.parse(readFileSync(path, 'utf8'));
    }
    catch (error) {
        throw new Error(`Failed to parse JSON from file ${path}: ${error.message}`);
    }
}
//# sourceMappingURL=jsonParse.js.map