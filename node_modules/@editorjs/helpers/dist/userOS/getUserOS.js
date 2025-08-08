/**
 * Returns object with os name as key and boolean as value. Shows current user OS
 */
export function getUserOS() {
    const OS = {
        win: false,
        mac: false,
        x11: false,
        linux: false,
    };
    const userOS = Object.keys(OS).find((os) => window.navigator.appVersion.toLowerCase().indexOf(os) !== -1);
    if (userOS !== undefined) {
        OS[userOS] = true;
        return OS;
    }
    return OS;
}
//# sourceMappingURL=getUserOS.js.map