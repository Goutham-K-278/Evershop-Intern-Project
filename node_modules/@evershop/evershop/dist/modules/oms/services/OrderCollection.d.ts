export class OrderCollection {
    constructor(baseQuery: any);
    baseQuery: any;
    init(filters?: any[]): Promise<void>;
    currentFilters(): () => /*elided*/ any;
    totalQuery: any;
    items(): Promise<any>;
    total(): Promise<any>;
}
