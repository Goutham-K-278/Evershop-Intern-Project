/**
 * Returns valid URL. If it is going outside and valid, it returns itself
 * If url has `one slash`, then it concatenates with window location origin
 * or when url has `two lack` it appends only protocol
 * @param url - url to prettify
 */
export function getValidUrl(url) {
    try {
        const urlObject = new URL(url);
        return urlObject.href;
    }
    catch (e) {
        // do nothing but handle below
    }
    if (url.substring(0, 2) === '//') {
        return window.location.protocol + url;
    }
    else {
        return window.location.origin + url;
    }
}
//# sourceMappingURL=getValidUrl.js.map