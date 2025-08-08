export class CustomerGroupCollection {
    constructor(baseQuery: any);
    baseQuery: any;
    init(args: any, { filters }: {
        filters?: never[] | undefined;
    }): Promise<void>;
    currentFilters(): () => /*elided*/ any;
    totalQuery: any;
    items(): Promise<any>;
    total(): Promise<any>;
}
