import { getUserOS } from '../userOS';
/**
 * Make shortcut command more human-readable
 * @param shortcut — string like 'CMD+B'
 */
export function beautifyShortcut(shortcut) {
    const OS = getUserOS();
    shortcut = shortcut
        .replace(/shift/gi, '⇧')
        .replace(/backspace/gi, '⌫')
        .replace(/enter/gi, '⏎')
        .replace(/up/gi, '↑')
        .replace(/left/gi, '→')
        .replace(/down/gi, '↓')
        .replace(/right/gi, '←')
        .replace(/escape/gi, '⎋')
        .replace(/insert/gi, 'Ins')
        .replace(/delete/gi, '␡')
        .replace(/\+/gi, '+');
    if (OS.mac) {
        shortcut = shortcut.replace(/ctrl|cmd/gi, '⌘').replace(/alt/gi, '⌥');
    }
    else {
        shortcut = shortcut.replace(/cmd/gi, 'Ctrl').replace(/windows/gi, 'WIN');
    }
    return shortcut;
}
//# sourceMappingURL=beautifyShortcut.js.map