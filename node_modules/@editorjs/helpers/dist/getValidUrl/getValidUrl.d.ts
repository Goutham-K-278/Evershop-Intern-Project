/**
 * Returns valid URL. If it is going outside and valid, it returns itself
 * If url has `one slash`, then it concatenates with window location origin
 * or when url has `two lack` it appends only protocol
 * @param url - url to prettify
 */
export declare function getValidUrl(url: string): string;
