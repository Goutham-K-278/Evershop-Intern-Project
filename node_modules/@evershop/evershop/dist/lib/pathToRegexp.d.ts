export function pathToRegexp(e: any, t: any, r: any): any;
export function parse(e: any, t: any): (string | {
    name: string | number;
    prefix: string;
    delimiter: any;
    optional: boolean;
    repeat: boolean;
    partial: boolean;
    asterisk: boolean;
    pattern: any;
})[];
export function compile(e: any, t: any): (r: any, n: any) => string;
export function tokensToFunction(e: any): (r: any, n: any) => string;
export function tokensToRegExp(e: any, t: any, r: any): any;
