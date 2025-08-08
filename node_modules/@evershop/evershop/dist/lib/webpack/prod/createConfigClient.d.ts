export function createConfigClient(routes: any): {
    mode: string;
    module: {
        rules: ({
            test: RegExp;
            resolve: {
                fullySpecified: boolean;
            };
            exclude?: undefined;
            use?: undefined;
        } | {
            test: RegExp;
            exclude: {
                and: RegExp[];
                not: RegExp[];
            };
            use: ({
                loader: string;
                options?: undefined;
            } | {
                loader: string;
                options: {
                    getTranslateData: () => Promise<Record<string, string>>;
                };
            })[];
            resolve?: undefined;
        })[];
    };
    target: string;
    output: {
        path: string;
        publicPath: string;
        filename: string;
        pathinfo: boolean;
    } | {
        path: string;
        publicPath: string;
        pathinfo: boolean;
        filename?: undefined;
    };
    plugins: never[];
    cache: {
        type: string;
    };
};
