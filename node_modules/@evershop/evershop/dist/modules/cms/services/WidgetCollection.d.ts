export class WidgetCollection {
    constructor(baseQuery: any);
    baseQuery: any;
    init(filters?: any[], isAdmin?: boolean): Promise<void>;
    currentFilters(): () => /*elided*/ any;
    totalQuery: any;
    items(): Promise<any>;
    total(): Promise<any>;
}
