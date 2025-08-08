export class ProductCollection {
    constructor(baseQuery: any);
    baseQuery: any;
    /**
     *
     * @param {{key: String, operation: String, value: String}[]} filters
     * @param {boolean} isAdmin
     */
    init(filters?: {
        key: string;
        operation: string;
        value: string;
    }[], isAdmin?: boolean): Promise<void>;
    currentFilters(): () => /*elided*/ any;
    totalQuery: any;
    items(): Promise<any>;
    total(): Promise<any>;
}
