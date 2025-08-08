export const GraphqlPlugin: {
    new (route: any, outputFile?: undefined): {
        route: any;
        outputFile: string;
        query: {};
        fragments: {};
        variables: any[];
        apply(compiler: any): void;
    };
};
