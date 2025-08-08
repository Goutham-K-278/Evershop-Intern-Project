export function getSessionConfig(cookieSecret: any): {
    store: any;
    secret: any;
    cookie: {
        maxAge: number;
    };
    resave: boolean;
    saveUninitialized: boolean;
};
