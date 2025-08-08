/* eslint-disable @typescript-eslint/no-magic-numbers */
/**
 * Returns true if passed key code is printable (a-Z, 0-9, etc) character.
 * @param keyCode - code of some key
 * @returns true, if passed keyCode is printable, false otherwise
 */
export function isPrintableKey(keyCode) {
    return (keyCode > 47 && keyCode < 58) // number keys
        || keyCode === 32 || keyCode === 13 // Space bar & return key(s)
        || keyCode === 229 // processing key input for certain languages — Chinese, Japanese, etc.
        || (keyCode > 64 && keyCode < 91) // letter keys
        || (keyCode > 95 && keyCode < 112) // Numpad keys
        || (keyCode > 185 && keyCode < 193) // ;=,-./` (in order)
        || (keyCode > 218 && keyCode < 223); // [\]' (in order)
}
/* eslint-enable @typescript-eslint/no-magic-numbers */
//# sourceMappingURL=isPrintableKey.js.map